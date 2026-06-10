
import connection from "../db/connections/connection.js";

async function index(request, response) {
    try {
        const sql = `
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
      ORDER BY products.id
    `;

        const [products] = await connection.query(sql);

        response.json({
            data: products,
        });
    } catch (error) {
        console.error(error);

        response.status(500).json({
            error: "Internal Server Error",
            message: "Errore durante il recupero dei prodotti",
        });
    }
}

async function show(request, response) {

    const { id } = request.params;

    const query = `
        SELECT id, name, price, description, image
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

        response.json({
            error: null,
            results: product
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
    try{

    }catch{

    }
};

async function modify(request, response) {
    try{

    }catch{

    }
};

export {index, show, create, destroy, modify};