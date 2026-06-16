/*per runnare con pnpm chat'*/

import { ChatAnthropic } from "@langchain/anthropic";
import { HumanMessage, SystemMessage } from "langchain";
import connection from '../db/connections/connection.js';


const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;

export const model = new ChatAnthropic({
    model: 'claude-sonnet-4-6',
    apiKey: CLAUDE_API_KEY,
    temperature: 0.5
});

export function createAgent({ systemPrompt, tools = [] }) {
    return {
        invoke: async ({ messages }) => {
            const { HumanMessage, SystemMessage, ToolMessage } = await import("langchain/schema");

            const lastUserContent = messages.at(-1).content;
            const sysMsg = new SystemMessage(systemPrompt);
            const humanMsg = new HumanMessage(lastUserContent);

            let currentMessages = [sysMsg, humanMsg];
            let response = await model.invoke(currentMessages, { tools });

            while (response.tool_calls && response.tool_calls.length > 0) {
                const toolMessages = [];

                for (const toolCall of response.tool_calls) {
                    const calledTool = tools.find(t => t.name === toolCall.name);
                    if (calledTool) {
                        console.log(`⚙️ [Agente] Tool: ${calledTool.name}...`);
                        const toolResult = await calledTool.invoke(toolCall.args);
                        toolMessages.push(new ToolMessage({
                            content: toolResult,
                            tool_call_id: toolCall.id
                        }));
                    }
                }

                currentMessages = [sysMsg, humanMsg, response, ...toolMessages];
                response = await model.invoke(currentMessages, { tools });
            }

            return response;
        }
    };
}
