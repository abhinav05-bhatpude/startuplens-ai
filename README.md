# 🚀 StartupLens AI

An AI-powered startup validation platform that helps founders transform raw startup ideas into investor-ready business opportunities.

StartupLens AI uses Google Gemini AI to analyze startup ideas, validate market potential, generate business plans, recommend monetization strategies, and create execution roadmaps—all within a modern full-stack web application.

---

## 🌐 Live Demo

https://startuplens-ai-zeta.vercel.app/

---

## 💻 GitHub Repository

https://github.com/abhinav05-bhatpude/startuplens-ai

---

## 📖 Overview

Starting a startup is difficult because founders often don't know whether their idea is worth building.

StartupLens AI solves this problem by providing AI-powered startup validation in seconds. Users can save startup ideas, receive professional AI analysis, generate business plans, explore monetization strategies, and access investor-style reports through a clean and responsive dashboard.

The application is built with modern web technologies including Next.js, TypeScript, Prisma ORM, PostgreSQL, Auth.js, Tailwind CSS, and Google Gemini AI.

## ✨ Features

### 🤖 AI Startup Validation
- Analyze startup ideas using Google Gemini AI
- Evaluate business feasibility and market potential
- Generate investor-style startup reports

### 💡 Startup Idea Management
- Create, edit, and delete startup ideas
- Organize all startup ideas in one dashboard
- Access previous analyses anytime

### 📄 AI Business Plans
- Generate detailed business plans
- Receive monetization strategies
- Get MVP recommendations
- View launch roadmaps

### 📊 Startup Reports
- SWOT analysis
- Competitor insights
- Market validation
- Founder action plan
- Executive summary

### 🔐 Secure Authentication
- Google OAuth Login
- Credentials Authentication
- Protected Dashboard Routes
- Session Management with Auth.js

### 🎨 Modern User Experience
- Fully responsive design
- Mobile-friendly dashboard
- Clean and intuitive interface
- Beautiful modern UI built with Tailwind CSS

---

## 🛠 Tech Stack

### Frontend
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- React Markdown

### Backend
- Next.js API Routes
- Auth.js
- Prisma ORM

### Database
- PostgreSQL
- Neon Database

### Artificial Intelligence
- Google Gemini AI

### Authentication
- Google OAuth
- Credentials Authentication

### Deployment
- Vercel

### Development Tools
- Git
- GitHub
- npm
- ESLint


## 📂 Project Structure

```text
src/
├── app/
│   ├── api/
│   ├── dashboard/
│   ├── login/
│   └── register/
├── components/
│   ├── dashboard/
│   └── landing/
├── lib/
├── generated/
└── auth.ts

prisma/
public/
```

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/abhinav05-bhatpude/startuplens-ai.git
```

### Navigate to the Project

```bash
cd startuplens-ai
```

### Install Dependencies

```bash
npm install
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Run Database Migrations

```bash
npx prisma migrate dev
```

### Start Development Server

```bash
npm run dev
```