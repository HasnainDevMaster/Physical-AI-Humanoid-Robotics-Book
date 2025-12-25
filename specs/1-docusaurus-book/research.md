# Research Document: RAG Chatbot Implementation

## Decision: Backend Architecture
**Rationale:** Separate FastAPI backend is needed for RAG processing to handle embeddings, vector storage, and complex AI operations that cannot be performed client-side. This aligns with the requirement for separate frontend/backend architecture.
**Alternatives considered:** Serverless functions, monolithic architecture with Docusaurus - rejected due to computational requirements and security concerns.

## Decision: Embedding Model Selection
**Rationale:** Qwen text-embedding-v4 via DashScope API provides high-quality embeddings with good performance for the book content. This was specified in the requirements.
**Alternatives considered:** OpenAI embeddings, local embedding models - Qwen was specified in requirements and offers good quality at reasonable cost.

## Decision: Vector Database
**Rationale:** Qdrant Cloud provides managed vector database solution with good performance and free tier for development. This was specified in the requirements.
**Alternatives considered:** Pinecone, Weaviate, local Chroma - Qdrant was specified in requirements and offers good performance.

## Decision: Caching Strategy
**Rationale:** Disk-based caching using diskcache library to prevent token exhaustion and improve response times for repeated queries. This addresses the requirement to reduce API calls by 80%+.
**Alternatives considered:** Redis, in-memory cache - disk-based cache is simpler to deploy and sufficient for prototype.

## Decision: Frontend Integration
**Rationale:** Floating chat widget provides non-intrusive access to RAG functionality while maintaining focus on book content. This was specified in the requirements.
**Alternatives considered:** Sidebar integration, dedicated page - floating widget allows access from any page without disrupting reading experience.

## Decision: Content Chunking Strategy
**Rationale:** RecursiveCharacterTextSplitter with appropriate chunk size and overlap preserves context while enabling effective retrieval. This ensures the RAG system can properly understand and respond to queries about the book content.
**Alternatives considered:** Sentence-based splitting, paragraph-based splitting - character-based splitting provides more consistent chunks.

## Decision: Deployment Strategy
**Rationale:** Separate deployment (GitHub Pages for frontend, Railway for backend) allows independent scaling and proper separation of concerns. This was specified in the requirements.
**Alternatives considered:** Monolithic deployment, different cloud providers - current approach follows specified requirements.

## Decision: Security Approach
**Rationale:** Environment variables for credentials with .env ignored by Git provides basic security for API keys. This follows the requirement to exclude credentials from version control.
**Alternatives considered:** Secrets management services - environment variables are sufficient for prototype.

## Decision: Selected Text Feature
**Rationale:** Client-side text selection with context injection allows users to ask questions about specific content. This addresses the requirement for the chatbot to answer questions based on user-selected text.
**Alternatives considered:** Highlight-based selection, server-side text extraction - client-side selection is simpler and more responsive.

## Decision: Bonus Features Implementation
**Rationale:** Implementing bonus features as specified (Better Auth, personalization, Urdu translation) maximizes project value and bonus points.
**Alternatives considered:** Focusing only on core RAG functionality - bonus features were explicitly requested and add significant value.

## Decision: API Contract Design
**Rationale:** RESTful API with JSON responses provides a clean interface between frontend and backend. This ensures proper separation of concerns while maintaining simplicity.
**Alternatives considered:** GraphQL, gRPC - REST is simpler for this use case and well-supported by both frontend and backend technologies.

## Decision: Error Handling Strategy
**Rationale:** Graceful fallback with user notifications when external services (Qdrant/Neon) are unavailable ensures good user experience even when dependencies fail. This was specified in the requirements.
**Alternatives considered:** Silent failure, complete error pages - graceful fallback maintains functionality while informing users.

## Decision: Content Indexing Workflow
**Rationale:** Automated re-indexing during build process ensures content stays current when book content changes. This was specified in the requirements.
**Alternatives considered:** Manual re-indexing, scheduled re-indexing - build-time re-indexing ensures consistency with deployed content.