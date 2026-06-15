
import connection from "../db/connections/connection.js";
import { avgReviews, countReviews, getReviewsByProduct } from "../utils/reviewsQueries.js";

async function showLatest(request, response) {
    const query = `SELECT products.*,
                    GROUP_CONCAT(categories.name SEPARATOR ', ') AS categories
                    FROM products
                    LEFT JOIN category_product
                    ON products.id = category_product.product_id
                    LEFT JOIN categories
                    ON category_product.category_id = categories.id
                    GROUP BY products.id
                    ORDER BY created_at desc
                    LIMIT 5;`

    try {

        const [products] = await connection.execute(query);

        const productsWithRating = await Promise.all(
        products.map(async (product) => {
            const averageRating = await avgReviews(product.id);

            return{
                ...product,
                price: Number(product.price),
                average_rating: averageRating ? averageRating : null
                };
            })
        );

        response.json({
            data: productsWithRating
        });
        
    } catch (error) {
        console.error(error);

        response.status(500).json({
            error: "Internal Server Error",
            message: "Errore durante il recupero dei prodotti",
        });
    }               
};

async function index(request, response) {
    try {
        const { search } = request.query;
        let sql;
        let searchValue = [];

        sql = `
            SELECT 
                products.id,
                products.name,
                products.price,
                products.description,
                products.available,
                products.in_stock,
                products.ingredient,
                products.image,
                products.created_at,
                products.updated_at,
            GROUP_CONCAT(categories.name SEPARATOR ', ') AS categories
            FROM products
                LEFT JOIN category_product
                    ON products.id = category_product.product_id
                LEFT JOIN categories
                    ON category_product.category_id = categories.id
            GROUP BY products.id
            ORDER BY created_at desc
    `;

        if (search) {
            sql = `
                SELECT 
                    products.id,
                    products.name,
                    products.price,
                    products.description,
                    products.available,
                    products.in_stock,
                    products.ingredient,
                    products.image,
                    products.created_at,
                    products.updated_at,
                GROUP_CONCAT(categories.name SEPARATOR ', ') AS categories
                FROM products
                    LEFT JOIN category_product
                        ON products.id = category_product.product_id
                    LEFT JOIN categories
                        ON category_product.category_id = categories.id
                WHERE products.name LIKE concat('%', ? '%')
                GROUP BY products.id
                ORDER BY created_at desc
            `;
            searchValue = [search];
        };

        const [products] = await connection.query(sql, searchValue);

        const productsWithRating = await Promise.all(
            products.map(async (product) => {
                // recupero la media
                const averageRating = await avgReviews(product.id);

                return {
                    ...product,
                    price: Number(product.price),
                    average_rating: averageRating ? averageRating : null
                };
            })
        );

        response.json({
            data: productsWithRating
        });
    } catch (error) {
        console.error(error);

        response.status(500).json({
            error: "Internal Server Error",
            message: "Errore durante il recupero dei prodotti",
        });
    }
};

async function show(request, response) {

    const { id } = request.params;

    const query = `
        SELECT id, name, price, description, image, available
        FROM products p
        WHERE p.id = ?
    `;

    try {
        const [rows] = await connection.execute(query, [id]);

        if (rows.length === 0) {
            return response.status(404).json({
                error: 'Prodotto non trovato',
                results: null
            });
        }

        const product = rows[0];

        // query per le categorie
        const queryCategories = `
        select c.name
        from category_product cp
            join categories c 
                on cp.category_id = c.id
        where cp.product_id = ?
        `;

        // associo i le categorie
        const [categories] = await connection.execute(queryCategories, [id]);

        product.categories = categories;

        const total_reviews = await countReviews(id);
        const average_rating = await avgReviews(id);
        const reviews = await getReviewsByProduct(id);

        response.json({
            error: null,
            results: {...product,
                price: Number(product.price),
                total_reviews,
                average_rating,
                reviews
            }
        })

    } catch (error) {
        console.log(error);
        return response.status(500).json({
            error: 'È successo qualcosa',
            results: null
        });
    }
}

async function create(request, response) {
    try {
        const { name, description, price, ingredient, image } = request.body;

        if (!name || !price) {
            return response.status(400).json({
                success: false,
                message: "Nome e prezzo sono obbligatori"
            });
        }
        const [result] = await connection.query(
            `INSERT INTO products (name, description, price, ingredient,in_stock,updated_at,created_at,image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [name, description, price, ingredient, true, new Date(), new Date(), image]
        );
        return response.status(201).json({
            success: true,
            message: "Prodotto creato con successo",
            productId: result.insertId
        });
    } catch (error) {
        console.error(error);
        return response.status(500).json({
            success: false,
            message: "Errore server"

        });
    }
};

async function destroy(request, response) {
    try {
        const { id } = request.params;

        // Query per verificare se il prodotto esiste (con JOIN per vedere le categorie)
        const sqlVerify = `
            SELECT p.*
            FROM products p
            LEFT JOIN category_product cp 
            ON p.id = cp.product_id
            WHERE p.id = ?`;

        const [products] = await connection.query(sqlVerify, [id]);

        // Validazione array vuoto
        if (products.length === 0) {
            return response.status(404).json({
                error: "Not Found",
                message: "Prodotto non trovato",
            });
        }

        // Query eliminazione prodotti e relazioni con categorie
        const sqlDelete = `
            DELETE p, cp FROM products p
            INNER JOIN category_product cp 
            ON p.id = cp.product_id
            WHERE p.id = ?`;

        await connection.query(sqlDelete, [id]);

        response.sendStatus(204);

    } catch (error) {
        console.error(error);

        response.status(500).json({
            error: "Internal Server Error",
            message: "Errore durante l'eliminazione del prodotto",
        });
    }
}

async function modify(request, response) {
    try{

    }catch{

    }
};

export {index, show, create, destroy, modify, showLatest};