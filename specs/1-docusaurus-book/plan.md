# Implementation Plan: RAG Chatbot System for Physical AI & Humanoid Robotics Book

**Branch**: `1-docusaurus-book` | **Date**: 2025-12-25 | **Spec**: [specs/1-docusaurus-book/spec.md](./spec.md)
**Input**: Feature specification from `/specs/1-docusaurus-book/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Build and deploy a Retrieval-Augmented Generation (RAG) chatbot within the published Docusaurus book. This chatbot will utilize OpenAI Agents/ChatKit SDKs, FastAPI, Neon Postgres Database, and Qdrant Cloud Free Tier to answer user questions about the book's content, including answering questions based only on text selected by the user. The implementation will include a floating UI widget in Docusaurus, a separate FastAPI backend for RAG processing, caching layer to prevent token exhaustion, and bonus features for authentication, personalization, and Urdu translation.

## Technical Context

**Language/Version**: TypeScript 4.9+ for frontend, Python 3.11 for backend
**Primary Dependencies**:
- Frontend: Docusaurus v3, React, TypeScript, react-icons
- Backend: FastAPI, uvicorn, python-dotenv, langchain-community, qdrant-client, openai, diskcache
**Storage**: Qdrant Cloud (vector database), Neon Postgres (user data for bonuses), GitHub Pages (frontend static files)
**Testing**: Automated and manual validation of RAG accuracy, response time, caching effectiveness, and bonus feature functionality
**Target Platform**: Web browser (desktop, tablet, mobile) with separate backend service
**Project Type**: Full-stack application with separate frontend (Docusaurus) and backend (FastAPI)
**Performance Goals**:
- Responses within 5 seconds
- 90%+ accuracy on test queries
- 80%+ reduction in API calls via caching
- Selected-text queries limited to provided context with 100% fidelity
**Constraints**:
- Free tier services only (Qdrant Cloud, Neon Postgres, Railway for backend)
- Separate deployment (GitHub Pages for frontend, Railway for backend)
- Credentials stored in .env files, excluded from version control
**Scale/Scope**: Educational content for students, researchers, and professionals in AI and robotics with interactive Q&A capability

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Spec-First Development Compliance
- [x] All features documented in specifications before development begins
- [x] Implementation plan references feature specification from `/specs/1-docusaurus-book/spec.md`

### Modular Intelligence Compliance
- [x] Design includes reusable Claude Code Subagents and Agent Skills
- [x] Subagents (EmbeddingAgent, RetrieverAgent, ChatbotAgent) created for RAG tasks
- [x] Skills (CachingSkill, SelectedTextSkill, UrduTranslationSkill) created for specific functionality

### Retrieval Accuracy Compliance
- [x] RAG system design ensures responses are grounded in book content only
- [x] Proper citation mechanism included for content verification
- [x] Selected-text context feature limits responses to provided text only

### User-Centricity Compliance
- [x] Design includes personalization features based on user background
- [x] Accessibility requirements (Urdu translation) addressed
- [x] Floating chat widget provides non-intrusive access to RAG functionality

### Tech Stack Standardization Compliance
- [x] Architecture aligns with Docusaurus (Frontend), FastAPI (Backend), Neon Postgres (Auth/User Data), Qdrant Cloud (Vector DB)
- [x] Technology choices comply with standardized stack (Qwen embeddings, OpenAI SDKs, etc.)

## Project Structure

### Documentation (this feature)
```text
specs/1-docusaurus-book/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
│   └── rag-chatbot-api.yaml
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)
```text
# Frontend (Docusaurus site)
docs/                    # Existing book content
├── ...
└── ...

src/
├── components/
│   ├── Chatbot/         # RAG chatbot UI component
│   │   ├── Chatbot.tsx
│   │   └── Chatbot.module.css
│   └── InteractiveCodeBlock/
│       └── ...
├── pages/
└── css/

static/
├── img/
└── ...

# Backend (FastAPI application)
backend/
├── app/
│   ├── main.py          # FastAPI application entry point
│   ├── api/
│   │   ├── chat.py      # Chat endpoints
│   │   ├── content.py   # Content management endpoints
│   │   └── user.py      # User management endpoints (bonus)
│   ├── models/          # Data models
│   ├── schemas/         # Pydantic schemas
│   ├── database/        # Database connection utilities
│   └── utils/
│       ├── embeddings.py # Qwen embedding utilities
│       ├── retrieval.py  # Qdrant retrieval utilities
│       └── caching.py    # Caching utilities
├── requirements.txt     # Python dependencies
├── index_content.py     # Content indexing script
└── .env                 # Environment variables (git-ignored)

.claude/
├── agents/
│   ├── EmbeddingAgent.md
│   ├── RetrieverAgent.md
│   └── ChatbotAgent.md
└── skills/
    ├── CachingSkill/
    ├── SelectedTextSkill/
    └── UrduTranslationSkill/

docusaurus.config.js      # Updated with backend API URL
package.json
tsconfig.json
```

**Structure Decision**: Full-stack application with separate frontend (Docusaurus) and backend (FastAPI) services. The frontend provides the educational content and chatbot UI, while the backend handles RAG processing, vector storage, and user management. Claude Code agents and skills are organized in the .claude/ directory to support RAG-specific tasks.

## Implementation Phases

### Phase 1: Backend Setup and Credential Integration
- Set up FastAPI project structure
- Integrate with Qwen embeddings via DashScope API
- Set up Qdrant vector database connection
- Implement credential management with .env files

### Phase 2: Content Ingestion and Indexing
- Create script to extract content from Docusaurus docs
- Implement content chunking strategy
- Index book content in Qdrant with metadata

### Phase 3: Qwen Embeddings and Qdrant Integration
- Implement Qwen text-embedding-v4 integration
- Set up vector storage and retrieval in Qdrant
- Test embedding quality and retrieval accuracy

### Phase 4: FastAPI RAG Endpoints with Caching
- Create chat query endpoint with RAG logic
- Implement caching layer to reduce API calls
- Add proper error handling and fallbacks

### Phase 5: Neon Postgres Setup (for bonuses)
- Set up Neon Postgres schema for user data
- Implement user authentication models
- Prepare for bonus feature integration

### Phase 6: Frontend Chatbot UI Component
- Create floating chatbot widget in Docusaurus
- Implement chat interface with message history
- Add selected-text context capture functionality

### Phase 7: Selected-Text Context Integration
- Implement text selection detection
- Pass selected text as context to backend
- Ensure responses are limited to provided context

### Phase 8: Bonus Feature Implementation
- Implement Better Auth integration
- Add content personalization based on user background
- Implement Urdu translation using Qwen capabilities

### Phase 9: End-to-End Testing and Deployment
- Test full RAG flow from query to response
- Validate accuracy and response time requirements
- Deploy backend to Railway and update frontend

### Phase 10: Documentation Update and Cleanup
- Update spec.md with final implementation details
- Clean up unused code and documentation
- Final testing and quality assurance

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None identified | | |