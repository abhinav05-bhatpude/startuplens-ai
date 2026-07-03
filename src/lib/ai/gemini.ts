import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export interface StartupAnalysisInput {
  startupName: string;
  problem: string;
  solution: string;
  targetAudience: string;
}

export async function analyzeStartup(
  input: StartupAnalysisInput
) {
  const prompt = `
You are an expert startup consultant.

Analyze the following startup idea.

Startup Name:
${input.startupName}

Problem:
${input.problem}

Solution:
${input.solution}

Target Audience:
${input.targetAudience}

Return your response in the following format:

## Market Validation

## Competitor Insights

## Strengths

## Weaknesses

## Opportunities

## Risks
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
}