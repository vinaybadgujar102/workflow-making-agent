export const DEFAULT_MODEL = "gemini-3.5-flash";

export type AgentEnv = {
  apiKey: string;
  model: string;
};

export class MissingApiKeyError extends Error {
  constructor() {
    super("GEMINI_API_KEY is not set. Copy apps/agent/.env.example to .env and add your key.");
    this.name = "MissingApiKeyError";
  }
}

export function loadAgentEnv(): AgentEnv {
  const apiKey = process.env.GEMINI_API_KEY?.trim();

  if (!apiKey) {
    throw new MissingApiKeyError();
  }

  return {
    apiKey,
    model: process.env.GEMINI_MODEL?.trim() || DEFAULT_MODEL,
  };
}
