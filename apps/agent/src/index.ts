import { createAgent } from "./agent";

export { Agent, createAgent } from "./agent";
export type { AgentOptions } from "./agent";
export { createGenAIClient } from "./client";
export { DEFAULT_MODEL, loadAgentEnv, MissingApiKeyError } from "./config";
export type { AgentEnv } from "./config";

if (import.meta.main) {
  const agent = createAgent({
    systemInstruction: "You are a workflow-making agent.",
  });

  console.log(`Agent service ready (model: ${agent.model})`);
}
