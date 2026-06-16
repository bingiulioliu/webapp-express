import { HumanMessage } from "langchain";
import { potatoAgent } from "../agents/potatoAgent.js"


export async function chat (request, response) {
    try {
        const {message} = request.body;

        if (!message){
            return response.status(400).json({error});
        }
        
        const aiResponse = await potatoAgent.invoke({
            messages: [new HumanMessage(message)]
        });
        
        response.json({reply: aiResponse.content});
    } catch (error) {
        response.status(500).json({error});
    }
}