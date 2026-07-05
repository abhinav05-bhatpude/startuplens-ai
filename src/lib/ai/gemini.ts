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
You are an experienced Startup Founder, Product Manager, Venture Capital Investor, and Business Consultant.

Your job is to generate a complete business plan for the startup idea below.

==============================
STARTUP DETAILS
==============================

Startup Name:
${input.startupName}

Problem:
${input.problem}

Solution:
${input.solution}

Target Audience:
${input.targetAudience}

==============================
INSTRUCTIONS
==============================

Write a detailed business report.

Use clear headings.

Avoid generic answers.

Give practical advice.

Keep every section between 120 and 250 words.

==============================
OUTPUT FORMAT
==============================

# Executive Summary

Provide a short overview of the startup.

# Market Validation

Explain whether the problem is worth solving and discuss market demand.

# Competitor Insights

Mention existing competitors and how this startup can differentiate itself.

# Strengths

List the biggest strengths.

# Weaknesses

Mention possible weaknesses.

# Opportunities

Explain future opportunities.

# Risks

Describe business and technical risks.

# MVP Plan

Create an MVP containing:

- Core Features
- Nice-to-Have Features
- Suggested Tech Stack
- Estimated Development Phases

# Monetization Strategy

Recommend:

- Revenue Model
- Pricing Strategy
- Customer Acquisition

# 90-Day Launch Roadmap

Break it into:

Month 1

Month 2

Month 3

Finish with a short conclusion encouraging the founder while remaining realistic.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
}