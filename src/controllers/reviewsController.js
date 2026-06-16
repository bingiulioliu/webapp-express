
import connection from "../db/connections/connection.js";

async function index(request, response) {

    try{
        const [rows] = await connection.query('select id, name, text_review, rating, title from reviews');

        response.json({
            error: null,
            results: rows.map(row => {
                return {...row,
                    rating: Number(row.rating)
                }
            })
        });
    } catch(error) {
        response.status(500).json({
            error: 'Errore di caricamento',
            results: []
        })
    }
};

async function show(request, response) {
    
    const {id} = request.params;

    const query = `
    select id, name, text_review, rating, title
    from reviews r
    where r.id = ?
    `;
    
    try{
        const [rows] = await connection.execute(query, [id]);

        // se array è vuoto
        if (rows.length === 0){
            return response.status(404).json({
                error: 'Recensione non trovata',
                results: null
            });
        }

        // se trovo la rece, la estraggo
        const review = rows[0];

        // query per il prodotto assogiato
        const queryProduct =`
            select p.name
            from products p
                join reviews r
                    on p.id = r.product_id
            where p.id = ?
        `;

        // assoccio
        const [name] = await connection.execute(queryProduct, [id]);

        review.name = name[0];

        response.json({
            error: null,
            results: {...review,
                rating: Number(review.rating)
            }
        })

    } catch(error) {
        response.status(500).json({
            error: 'È successo qualcosa',
            results: null
        });
        console.log(error);
    }
};

async function create(request, response) {
    
    const { product_id, name, title, rating, text_review } = request.body;

    try {
        const sql = `
        INSERT INTO reviews (product_id, name, title, rating, text_review) 
        VALUES (?, ?, ?, ?, ?)`;

        await connection.execute(sql, [product_id, name, title, rating, text_review]);

        return response.status(200).json({
            success: true,
            message: 'Recensione inserita con successo!'
        });

    } catch (error) {
        console.error(error);

        // 4. Se il database fallisce, rispondiamo al frontend senza far crashare il server
        return response.status(500).json({
            error: "Impossibile salvare la recensione..."
        });
    }
}


async function modify(request, response) {
    try{

    }catch{

    }
};


async function destroy(request, response) {
    try {
        const { id } = request.params;

// Query per verificare se la recensione esiste
        const sqlVerify = `
            SELECT *
            FROM reviews 
            WHERE id = ?`;

        const [reviews] = await connection.query(sqlVerify, [id]);

// Validazione nel caso l'array delle recensioni sia vuoto
        if (reviews.length === 0) {
            response.status(404).json({
                error: "Not Found",
                message: "Recensione non trovata",
            });
            return;
        }
// Query di eliminazione
        const sqlDelete = `
            DELETE FROM reviews 
            WHERE id = ?`;

        await connection.query(sqlDelete, [id]);

        response.sendStatus(204);

// Gestione errori
    } catch (error) {
        console.error(error);

        response.status(500).json({
            error: "Internal Server Error",
            message: "Errore durante l'eliminazione della recensione",
        });
    }
}

export {index, show, create, destroy, modify};


