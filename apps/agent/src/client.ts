import { GoogleGenAI } from "@google/genai";
import type { AgentEnv } from "./config";

export function createGenAIClient(env: Pick<AgentEnv, "apiKey">): GoogleGenAI {
  return new GoogleGenAI({ apiKey: env.apiKey });
}
