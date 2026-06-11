import connection from "../db/connections/connection.js";

async function index(request, response) {
    try {
        const [rows] = await connection.query('select id, name, description from categories');

        response.json({
            error: null,
            results: rows
        })

    } catch (error) {
        response.status(500).json({
            error: 'Errore di caricamento',
            results: []
        })
    }
};

async function show(request, response) {
    const { id } = request.params;

    const query = `
        select id, name, description
        from categories c
        where c.id = ?
    `;
    try {
        const [rows] = await connection.execute(query, [id]);

        if (rows.length === 0) {
            return request.status(404).json({
                error: 'Categoria non trovata',
                results: null
            });
        }

        const category = rows[0];

        const queryProducts = `
            select p.id, p.name as product_name
            from products p
                join category_product cp
                    on cp.product_id = p.id
            where cp.category_id = ?
        `;

        // associo i prodotti
        const [products] = await connection.execute(queryProducts, [id]);

        category.products = products;

        response.json({
            error: null,
            results: category
        })

    } catch (error) {
        console.log(error);
        return response.status(500).json({
            error: 'È successo qualcosa',
            results: null
        });
    }
};

export { index, show }