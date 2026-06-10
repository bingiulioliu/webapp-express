import connection from "../db/connections/connection.js";

async function validateCreateReview(request, response, next) {
    const attempt = request.body;
    const reviewName = attempt.name;
    const reviewProductId = attempt.product_id;
    const text_review = attempt.text_review;
    const rating = attempt.rating;
    const reviewTitle = attempt.title;

    if (!reviewName) {
        response.status(400).json({
            success: false,
            message: 'Il nome è obbligatorio'
        });

        return;
    } else {
        if (typeof reviewName !== 'string') {
            response.status(400).json({
                success: false,
                message: 'Devi inserire una stringa nel campo del nome'
            });
            return;
        } else if (reviewName.length > 50) {
            response.status(400).json({
                success: false,
                message: 'Non puoi inserire più di 50 caratteri come nome'
            });
            return;
        } else if (!isNaN(Number(reviewName))) {
            response.status(400).json({
                success: false,
                message: 'Non puoi inserire un numero nel campo nome'
            });
            return;
        } else if (reviewName.trim() === '') {
            response.status(400).json({
                success: false,
                message: 'Il nome non può essere vuoto'
            });
            return;
        }
    }

    if (!reviewProductId) {
        response.status(400).json({
            success: false,
            message: `L'id del prodotto è obbligatorio`
        });
        return;
    } else {
        if (typeof reviewProductId !== 'number' || reviewProductId.trim === '') {
            response.status(400).json({
                success: false,
                message: `L'id del prodotto deve essere un numero intero`
            });
            return;
        } else {
            try {
                const productFound = await connection.execute(`SELECT *
                                                    FROM products p
                                                    WHERE p.id=${reviewProductId};`);
                if (productFound[0].length === 0) { //caso in cui non viene trovato l'id del prodotto
                    response.status(404).json({
                        success: false,
                        message: `L'id del prodotto non corrisponde ad alcun prodotto nel catalogo`
                    });
                    return;
                }
            } catch (error) {
                throw error;
                return;
            }


        }
    }

    if (!text_review) {
        response.status(400).json({
            success: false,
            message: `Il testo della recensione è obbligatorio`
        });
        return;
    } else {
        if (typeof text_review !== 'string') {
            response.status(400).json({
                success: false,
                message: 'Devi inserire una stringa nel campo text_review'
            });
            return;
        } else if (text_review.length > 65.535) {
            response.status(400).json({
                success: false,
                message: 'Non puoi inserire più di 65.535 caratteri come text_review'
            });
            return;
        } else if (!isNaN(Number(text_review))) {
            response.status(400).json({
                success: false,
                message: 'Non puoi inserire un numero nel campo text_review'
            });
            return;
        } else if (text_review.trim() === '') {
            response.status(400).json({
                success: false,
                message: 'Il campo text_review non può essere vuoto'
            });
            return;
        }
    }

    if (!rating) {
        response.status(400).json({
            success: false,
            message: `Il rating è obbligatorio`
        });
        return;
    } else { //caso in cui il rating non è una stringa da "1" a "5"
        if (typeof rating !== 'string' || !/^[1-5]$/.test(rating)) {
            response.status(400).json({
                success: false,
                message: `Il rating deve essere una stringa (es.'5') contenente un numero da 1 a 5`
            });
            return;
        }
    }

    if (!reviewTitle) {
        response.status(400).json({
            success: false,
            message: `Il titolo della recensione è obbligatorio`
        });
        return;
    } else {
        if (typeof reviewTitle !== 'string') {
            response.status(400).json({
                success: false,
                message: 'Devi inserire una stringa nel campo title'
            });
            return;
        } else if (reviewTitle.length > 100) {
            response.status(400).json({
                success: false,
                message: 'Non puoi inserire più di 100 caratteri come title'
            });
            return;
        } else if (!isNaN(Number(reviewTitle))) {
            response.status(400).json({
                success: false,
                message: 'Non puoi inserire un numero nel campo title'
            });
            return;
        } else if (reviewTitle.trim() === '') {
            response.status(400).json({
                success: false,
                message: 'Il title non può essere vuoto'
            });
            return;
        }
    }

    request.newReviewName = reviewName.trim();
    request.newReviewProductId = reviewProductId;
    request.newTextReview = text_review.trim();
    request.newReviewRating = rating;
    request.newReviewTitle = reviewTitle.trim();

    next();
}

export default validateCreateReview;