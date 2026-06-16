/*per testare dovete aggiungere dotenv nelle dipendenze
e da terminale scrivere 'node -r dotenv/config src/utils/baseAgent.js'*/

import { ChatAnthropic } from "@langchain/anthropic";
import { HumanMessage, SystemMessage } from "langchain";
import connection from '../db/connections/connection.js';


const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;

const products = await connection.execute(`SELECT * FROM products;`);
const reviews = await connection.execute(`SELECT * FROM reviews`);

const model = new ChatAnthropic({
    model: 'claude-sonnet-4-6',
    apiKey: CLAUDE_API_KEY
});

const claudeResponse = await model.invoke([
    new SystemMessage(`Agisci come un esperto di fastfood e french fries e alle domande poste dal cliente
                        consulta sempre il database. Prodotti: ${JSON.stringify(products[0])}. Reviews: ${JSON.stringify(reviews[0])}`),
    new HumanMessage('Puoi dirmi 3 prodotti da mangiare sta sera, vorrei prodotti molto diversi fra di loro')
])

console.log(claudeResponse.content);
