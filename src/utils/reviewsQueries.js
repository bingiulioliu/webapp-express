import connection from "../db/connections/connection.js";

//  Count delle recensioni per ogni prodotto
export async function countReviews(productId) {
    const [rows] = await connection.execute(`
        select count(*) as total_reviews
        from reviews
        where product_id = ?
        `, [productId]);
    return rows[0].total_reviews;
};


//  Medie voto recensione
export async function avgReviews(productId) {
    const [rows] = await connection.execute(`
        select avg(rating) as average_rating
        from reviews
        where product_id = ?;
        `, [productId]);
    return rows[0].average_rating ? parseFloat(rows[0].average_rating).toFixed(1) : 0;
};


// Recensioni per prodotto
export async function getReviewsByProduct(productId) {
    const query = `
        select id, name, title, text_review, rating, created_at
        from reviews
        where product_id = ?
        order by rating desc
        limit 5
    `;

    const [rows] = await connection.execute(query, [productId]);

    return rows.map(review => ({
        ...review,
        rating: Number(review.rating)
    }));
};