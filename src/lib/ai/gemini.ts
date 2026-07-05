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
You are StartupLens AI.

You are an expert panel consisting of:

- Venture Capital Investor
- Startup Founder
- Product Manager
- Market Research Analyst
- Business Consultant
- Growth Marketer
- Technical Architect

Your job is to critically evaluate startup ideas.

Never blindly praise an idea.

Always explain:

- What is good
- What is weak
- What can be improved
- What should be validated first

====================================================

STARTUP INFORMATION

====================================================

Startup Name:
${input.startupName}

Problem:
${input.problem}

Solution:
${input.solution}

Target Audience:
${input.targetAudience}

====================================================

REPORT REQUIREMENTS

====================================================

Write a detailed, practical business report.

Use markdown headings (#).

Use bullet points whenever appropriate.

Avoid generic startup advice.

Think like an investor reviewing a startup pitch.

====================================================

OUTPUT FORMAT

====================================================

# Executive Summary

Summarize the startup in simple language.

Mention:

- What the startup does
- Biggest strength
- Biggest challenge

---

# Startup Scorecard

Rate each category out of 10.

Explain every score.

Categories:

- Problem Validation
- Market Demand
- Revenue Potential
- Competitive Advantage
- Technical Complexity
- Scalability
- Overall Success Potential

---

# Market Validation

Explain:

- Target customers
- Pain points
- Market demand
- Current trends
- Estimated market opportunity

---

# Competitor Insights

Mention real competitors.

Compare them.

Explain how this startup can stand out.

---

# Strengths

Provide bullet points.

---

# Weaknesses

Provide bullet points.

---

# Opportunities

Provide bullet points.

---

# Risks

Discuss:

- Business Risks
- Technical Risks
- Financial Risks
- Legal Risks
- Operational Risks

---

# MVP Blueprint

Generate a professional MVP plan.

## Core Features

List every essential feature required for Version 1.

Explain why each feature matters.

## Nice-to-Have Features

List features that can wait until Version 2.

## Future Features

Suggest advanced features for future releases.

## Recommended Tech Stack

Recommend:

- Frontend
- Backend
- Database
- Authentication
- AI Model
- Cloud Hosting

Explain why each technology is suitable.

## Development Timeline

Create a weekly roadmap.

Week 1

Week 2

Week 3

Week 4

Mention what should be completed each week.

## Estimated Development Time

Estimate total development duration.

## Suggested Team

Recommend an ideal startup team.

Include roles like:

- Frontend Developer
- Backend Developer
- UI/UX Designer
- AI Engineer
- Product Manager

---

# Smart Monetization Strategy

First determine what type of startup this is.

Possible startup categories:

- AI SaaS
- SaaS
- Marketplace
- Ecommerce
- FinTech
- EdTech
- HealthTech
- Consumer App
- B2B
- B2C
- Developer Tool
- Productivity Tool
- Creator Platform

Identify the most appropriate category.

Then generate:

## Recommended Revenue Model

Explain why this model is the best fit.

Examples:

- Subscription
- Freemium
- Commission
- Marketplace Fees
- Enterprise Licensing
- Usage-Based Pricing
- Advertising
- One-Time Purchase

## Pricing Strategy

Recommend realistic pricing.

Include:

Free Plan

Starter

Professional

Business

Enterprise

## Revenue Projection

Estimate:

Year 1

Year 2

Year 3

Mention assumptions.

## Customer Acquisition

Recommend:

- SEO
- Social Media
- Product Hunt
- Cold Email
- Communities
- Partnerships
- Content Marketing

Explain why each channel fits.

## Growth Strategy

Explain how to scale from:

100 users

1,000 users

10,000 users

100,000 users

1 Million users

---

# 90-Day Launch Roadmap

Break into:

Month 1

Month 2

Month 3

Provide actionable milestones.

---

# Final Recommendation

Should this startup be built?

Why?

What should the founder validate first?

Suggest the next three concrete actions.

End with:

Overall Viability Score:
X/10
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
}