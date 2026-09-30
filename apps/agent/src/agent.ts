import type { GoogleGenAI } from "@google/genai";
import { createGenAIClient } from "./client";
import { loadAgentEnv } from "./config";

export type AgentOptions = {
  model: string;
  systemInstruction?: string;
};

export class Agent {
  constructor(
    private readonly client: GoogleGenAI,
    private readonly options: AgentOptions,
  ) {}

  get model(): string {
    return this.options.model;
  }

  async run(input: string, previousInteractionId?: string) {
    return this.client.interactions.create({
      model: this.options.model,
      input,
      system_instruction: this.options.systemInstruction,
      previous_interaction_id: previousInteractionId,
    });
  }
}

export function createAgent(options: Partial<AgentOptions> = {}): Agent {
  const env = loadAgentEnv();
  const client = createGenAIClient(env);

  return new Agent(client, {
    model: options.model ?? env.model,
    systemInstruction: options.systemInstruction,
  });
}
