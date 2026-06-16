import { tool } from "langchain";
import { z } from "zod";
import connection from "../db/connections/connection.js";

export const getProdTool = tool(
    async () => {
        try {
            const query = `
                SELECT 
                    p.id, 
                    p.name, 
                    p.description,
                    GROUP_CONCAT(CONCAT('[', r.title, ': ', r.text_review, ']') SEPARATOR ' || ') AS all_reviews
                FROM products p
                LEFT JOIN reviews r 
                    ON p.id = r.product_id
                GROUP BY p.id;
            `;

            const [rows] = await connection.execute(query);
            return JSON.stringify(rows);

        } catch (error) {
            console.log(error);
        }
    }, {
        name: 'get_product_with_reviews',
        description: 'Lista di tutti i prodotti con le relative recensioni',
        schema: z.object({})
    }
);