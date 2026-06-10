
import connection from "../db/connections/connection.js";

async function index(request, response) {
    try{

    }catch{

    }
};

async function show(request, response) {
    try{

    }catch{

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


