import { HumanMessage } from "langchain";
import { potatoAgent } from "./potatoAgent.js";

const prompt = 'Quali prodotti mi consigli in base alle recensioni?';

const aiResponse = await potatoAgent.invoke({
    messages: [ new HumanMessage(prompt) ]
});

console.log(aiResponse.content);