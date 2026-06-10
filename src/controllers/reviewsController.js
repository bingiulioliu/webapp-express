
import connection from "../db/connections/connection.js";

async function index(request, response) {
    try{
        const [rows] = await connection.query('select id, name, text_review, rating, title from reviews');

        response.json({
            error: null,
            results: rows
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
            results: review
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
    
//     connection.execute(`INSERT INTO reviews (product_id, name, text_review, rating, title) 
// VALUES ('valore1', 'valore2');`)
    const newReviewName = request.newReviewName;
    const newReviewProductId = request.newReviewProductId;
    const newTextReview = request.newTextReview;
    const newReviewRating = request.newReviewRating;
    const newReviewTitle = request.newReviewTitle;
    
    try {
        await connection.execute(`INSERT INTO reviews (product_id, name, text_review, rating, title)
            VALUES ('${newReviewProductId}', '${newReviewName}', '${newTextReview}', '${newReviewRating}', '${newReviewTitle}');`)
    } catch (error) {
        throw error;
    }
    
    
    response.status(200).json({
        success: true
    })
    return;
};

async function modify(request, response) {
    try{

    }catch{

    }
};


async function destroy(request, response) {
    try {
        
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
            WHERE id = ${id}`;

        await connection.query(sqlDelete);

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


