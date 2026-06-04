AlgoPilot-RAG 🚀

- An AI-powered DSA Tutor that uses Retrieval-Augmented Generation (RAG) and Google Gemini to provide context-aware answers from a custom DSA knowledge base.

🌐 Live Demo

Frontend: https://algo-pilot-3mamf2nni-aditya-gupta149s-projects.vercel.app/

Backend: https://algopilot-rag.onrender.com/

📖 Overview

AlgoPilot-RAG is an intelligent DSA learning assistant that combines:

- Semantic Search using Embeddings

- Retrieval-Augmented Generation (RAG)

- Google Gemini API

Custom DSA Knowledge Base

React Frontend

Express Backend

Instead of relying solely on a language model's knowledge, the system first retrieves relevant information from a curated DSA dataset and then generates answers using Gemini.

✨ Features

AI Tutor

Ask DSA-related questions

Context-aware responses

Retrieves relevant content before generating answers

Semantic Search

Uses Gemini Embeddings

Finds meaning-based matches rather than keyword matches

RAG Pipeline

Document Chunking

Embedding Generation

Similarity Search

Context Retrieval

AI Response Generation

Modern UI

Dark-themed interface

Responsive design

Fast and lightweight

Deployment

Frontend deployed on Vercel

Backend deployed on Render

🏗️ System Architecture

User Query
    │
    ▼
Generate Query Embedding
    │
    ▼
Similarity Search
    │
    ▼
Retrieve Relevant Chunks
    │
    ▼
Build Context
    │
    ▼
Gemini Prompt
    │
    ▼
AI Generated Answer

🛠️ Tech Stack
Frontend
React.js
Vite
Axios
CSS
Backend
Node.js
Express.js
AI & RAG
Google Gemini API
Gemini Embeddings
Retrieval-Augmented Generation
Deployment
Vercel
Render
Version Control
Git
GitHub

📂 Project Structure

AlgoPilot-RAG/
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── services/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── embeddings.json
│   ├── chunks.json
│   └── app.js
│
├── README.md
└── .gitignore

⚙️ Installation

Clone Repository
git clone https://github.com/Aditya-gupta149/AlgoPilot-RAG.git
cd AlgoPilot-RAG

Backend Setup
cd server
npm install

Create .env

GOOGLE_API_KEY=your_api_key
PORT=5000

Start Backend

npm start
Frontend Setup
cd client
npm install

Create .env

VITE_API_URL=http://localhost:5000

Start Frontend

npm run dev

🔄 RAG Workflow

Step 1

Prepare DSA knowledge base.

Step 2

Split content into chunks.

Step 3

Generate embeddings using Gemini.

Step 4

Store embeddings locally.

Step 5

Convert user query into embedding.

Step 6

Find most relevant chunks.

Step 7

Pass retrieved context to Gemini.

Step 8

Generate final answer.




## Screenshots

### Home Page

<img width="1905" height="858" alt="Screenshot 2026-05-30 083336" src="https://github.com/user-attachments/assets/48e3a193-15f1-44f3-929b-cd2a521d799c" />


### AI DSA Tutor

<img width="1758" height="756" alt="Screenshot 2026-06-03 212352" src="https://github.com/user-attachments/assets/bd5754f8-1792-41dd-8078-599de6b768b7" />



### Code Review

<img width="1898" height="855" alt="Screenshot 2026-05-30 083711" src="https://github.com/user-attachments/assets/4cc82766-54c7-428f-9fa0-dc4442812aa5" />


### Mock Interview

<img width="1856" height="748" alt="Screenshot 2026-05-30 083522" src="https://github.com/user-attachments/assets/a7076d78-012d-404e-866c-b1ab2f84bef5" />


### Roadmap

<img width="1908" height="835" alt="Screenshot 2026-05-30 083833" src="https://github.com/user-attachments/assets/bea21f57-51af-4c61-b4bf-7b93484fc094" />



🚀 Future Improvements
Pinecone Integration
ChromaDB Integration
PDF Upload Support
Code Syntax Highlighting
Interview Preparation Module
Personalized Learning Paths
Mock Coding Interviews
Progress Tracking Dashboard
Multi-Document Retrieval
Advanced Ranking Algorithms


📈 Learning Outcomes

Through this project I learned:

Retrieval-Augmented Generation (RAG)
Embedding Models
Semantic Search
Prompt Engineering
Full Stack Development
API Integration
Deployment using Vercel and Render
AI Application Development


## Author

**Aditya Gupta**  
Electronics & Communication Engineering  
NIT Patna

GitHub: https://github.com/Aditya-gupta149

⭐ Support

If you found this project useful:

⭐ Star the repository

🍴 Fork the project

💡 Contribute improvements
