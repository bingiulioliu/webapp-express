function validationCreateReview(request, response, next) {

    const { product_id, name, title, rating, text_review } = request.body;
    //                      Valid. nome
    if (!name.trim() || !title.trim() || !text_review.trim()) {
        return response.status(400).json({
            error: 'Devi compilare tutti i campi!'
        });
    } 
    else if (typeof name !== 'string') {
        return response.status(400).json({
            error: 'Il nome deve essere una stringa.'
        });
    } 
    else if (name.trim().length > 30) {
        return response.status(400).json({
            error: 'Il nome non può superare i 30 caratteri.'
        });
    } 
    else if (!isNaN(Number(name.trim()))) {
        return response.status(400).json({
            success: false,
            message: 'Monello, nessuno ha i numeri nel nome'
        });
    } 
    //                       Valid. titolo
    else if (title.trim().length > 100) {
        return response.status(400).json({
            error: 'Il titolo non può superare i 100 caratteri.'
        });
    } 
    //                       Valid. testo
    else if (text_review.trim().length > 500) {
        return response.status(400).json({
            error: 'La recensione non può superare i 500 caratteri.'
        });
    }

    next();
}

export default validationCreateReview;




