import connection from "../db/connections/connection.js";

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

export { destroy };






