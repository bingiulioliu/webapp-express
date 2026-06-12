import connection from "../db/connections/connection.js";



async function findLatest() {
    const latest = await connection.execute(`SELECT *
                                            FROM products
                                            ORDER BY updated_at
                                            LIMIT 5;`);
    console.log(latest);
    
}

export default findById;