import connection from "../db/connections/connection.js";

const allowedTables = ["products", "categories", "reviews"];

async function findById(tableName, id) {
    if (!allowedTables.includes(tableName)) {
        throw new Error(`Tabella non consentita: ${tableName}`);
    }

    const sql = `
    SELECT *
    FROM ${tableName}
    WHERE id = ?
  `;

    const [results] = await connection.query(sql, [id]);

    return results[0];
}

export default findById;