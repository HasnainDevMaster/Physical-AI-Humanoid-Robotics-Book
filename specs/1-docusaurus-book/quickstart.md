# Quickstart: RAG Chatbot System Setup

## Prerequisites
- Node.js 18+ installed (for Docusaurus frontend)
- npm or yarn package manager
- Git for version control
- Python 3.11+ (for FastAPI backend)
- pip package manager
- Qwen DashScope API key
- Qdrant Cloud cluster endpoint and API key
- Neon Postgres connection string (for bonus features)

## Setup Instructions

### 1. Clone and Initialize Repository
```bash
git clone <repository-url>
cd <repository-name>
npm install  # For frontend
```

### 2. Create Backend Directory Structure
```bash
# Create backend directory
mkdir -p backend
cd backend
```

### 3. Set Up Python Environment
```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install fastapi uvicorn python-dotenv langchain-community qdrant-client openai diskcache
```

### 4. Create Environment File
```bash
# Create .env file in backend directory
touch .env
```

Add your credentials to `.env`:
```
DASHSCOPE_API_KEY=your_qwen_api_key
QDRANT_URL=your_qdrant_cluster_endpoint
QDRANT_API_KEY=your_qdrant_api_key
NEON_DB_URL=your_neon_connection_string
```

### 5. Set Up Frontend Dependencies
```bash
# From project root
cd website  # or wherever your Docusaurus project is
npm install react-icons  # for chatbot UI components
```

### 6. Create Claude Code Agents and Skills for RAG
```bash
# Create RAG-specific agent files
mkdir -p .claude/agents .claude/skills

# Create RAG agent files
touch .claude/agents/EmbeddingAgent.md
touch .claude/agents/RetrieverAgent.md
touch .claude/agents/ChatbotAgent.md

# Create RAG skill directories
mkdir -p .claude/skills/CachingSkill
mkdir -p .claude/skills/SelectedTextSkill
mkdir -p .claude/skills/UrduTranslationSkill
```

## Backend Setup

### 1. Create FastAPI Application Structure
```bash
# In backend/ directory
mkdir -p app app/api app/models app/schemas app/database app/utils
touch app/main.py
touch app/api/chat.py
touch app/api/content.py
touch app/api/user.py
touch app/models/__init__.py
touch app/schemas/__init__.py
touch app/database/__init__.py
touch app/utils/embeddings.py
touch app/utils/retrieval.py
touch app/utils/caching.py
```

### 2. Initialize Backend Application
```bash
# From backend/ directory
uvicorn app.main:app --reload
```

## Frontend Setup

### 1. Create Chatbot Component
```bash
# From Docusaurus root
mkdir -p src/components/Chatbot
touch src/components/Chatbot/Chatbot.tsx
touch src/components/Chatbot/Chatbot.module.css
```

### 2. Add Chatbot to Layout
```js
// In your Docusaurus layout or App component
import Chatbot from '@site/src/components/Chatbot/Chatbot';

// Add to JSX
<Chatbot />
```

### 3. Configure API Endpoint
```js
// In docusaurus.config.js, add environment variable for backend URL
const BACKEND_API_URL = process.env.BACKEND_API_URL || 'http://localhost:8000';
```

## Content Indexing

### 1. Create Indexing Script
```bash
# In backend/ directory
touch index_content.py
```

### 2. Run Content Indexing
```bash
# From backend directory
python index_content.py
```

This will extract content from your Docusaurus docs and create vector embeddings in Qdrant.

## Development Workflow

### 1. Start Backend Server
```bash
# From backend directory
cd backend
source venv/bin/activate
uvicorn app.main:app --reload
```

### 2. Start Frontend Server
```bash
# From Docusaurus directory
cd website  # or your Docusaurus directory
npm run start
```

### 3. Test API Endpoints
```bash
# Test health endpoint
curl http://localhost:8000/api/health

# Test chat endpoint
curl -X POST http://localhost:8000/api/chat/query \
  -H "Content-Type: application/json" \
  -d '{"query": "What is humanoid robotics?", "context": {"type": "full_content"}}'
```

## Deployment

### 1. Deploy Backend to Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### 2. Configure Frontend for Production
```js
// Update docusaurus.config.js with production backend URL
const BACKEND_API_URL = process.env.BACKEND_API_URL || 'https://your-railway-app.railway.app';
```

### 3. Deploy Frontend to GitHub Pages
```bash
# Set environment variable and deploy
BACKEND_API_URL=https://your-railway-app.railway.app npm run deploy
```

## Quality Validation Checklist
- [ ] Backend FastAPI server runs without errors
- [ ] Qwen embeddings API integration works
- [ ] Qdrant vector database connection established
- [ ] Chat query endpoint returns valid responses
- [ ] Selected text context feature works
- [ ] Caching layer reduces API calls by 80%+
- [ ] Floating chatbot widget appears on all pages
- [ ] Chatbot responses are accurate and cite sources
- [ ] Bonus features (auth, personalization, translation) implemented if pursuing
- [ ] Error handling provides graceful fallbacks
- [ ] All credentials properly secured in environment variables