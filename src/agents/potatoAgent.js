import { HumanMessage, SystemMessage, ToolMessage } from "langchain";
import { getProdTool } from "../utils/dbTool.js";
import { model } from "./baseAgent.js";


const tools = [getProdTool];

export const potatoAgent = {
    invoke: async ({ messages }) => {

        const lastUserContent = messages.at(-1).content;

        const systemPrompt = new SystemMessage(
            `Agisci come un esperto di fastfood e french fries del "Popolo Patatoso, sei il nostro Potato Agent". 
            Il tuo compito è consigliare i prodotti migliori della nostra attività.
            Non inventare MAI i dati: consulta SEMPRE il database tramite lo strumento.
            Se l'utente ti chiede consigli basati sulle recensioni, analizza attentamente i testi restituiti.`
        );

        const humanMessage = new HumanMessage(lastUserContent);
        let currentMessages = [systemPrompt, humanMessage];
        let response = await model.invoke(currentMessages, { tools });

        while (response.tool_calls && response.tool_calls.length > 0) {

            const toolMessages = [];

            for (const toolCall of response.tool_calls) {
                const calledTool = tools.find(t => t.name === toolCall.name);

                if (calledTool) {
                    console.log(`\n⚙️ [Agente] Esecuzione del tool: ${calledTool.name}...`);
                    const toolResult = await calledTool.invoke(toolCall.args);
                    toolMessages.push(new ToolMessage({
                        content: toolResult,
                        tool_call_id: toolCall.id
                    }));
                }
            }

            currentMessages = [systemPrompt, humanMessage, response, ...toolMessages];
            response = await model.invoke(currentMessages, { tools });
        }

        return response;
    }
};
