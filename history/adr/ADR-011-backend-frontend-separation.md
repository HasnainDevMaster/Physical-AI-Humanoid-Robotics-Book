# ADR-011: Separate Backend and Frontend Architecture with FastAPI and Docusaurus

## Status
Accepted

## Date
2025-12-25

## Context
The RAG chatbot system requires a clear separation between the frontend (Docusaurus) and backend (FastAPI) to enable independent deployment, scaling, and maintainability. The frontend serves static content via GitHub Pages while the backend handles computationally intensive RAG operations, vector storage, and API calls to external services.

## Decision
Maintain strict separation: FastAPI (Python) backend in /backend directory handling all RAG logic, embeddings, vector storage, and API calls; Docusaurus (TypeScript) frontend only contains chatbot UI component that calls backend API endpoints via RESTful API.

## Alternatives Considered
- Monorepo with server-side rendering: Would tightly couple frontend and backend, making independent scaling difficult
- Fully client-side RAG using browser-based embeddings: Would expose credentials and exceed browser computational limits
- Next.js rewrite for unified full-stack: Would add unnecessary complexity for a documentation site that benefits from Docusaurus's static site generation

## Consequences
- Positive: Clear boundaries enable independent deployment (GitHub Pages for static frontend, Railway for backend), easier testing and debugging, and aligns with spec constraints
- Negative: Requires CORS configuration; frontend must be configurable for backend URL (local/dev vs production); adds network latency for chat queries
- Risk: Network dependency between frontend and backend; requires backend availability for chat functionality

## References
- plan.md: Technical Context section, Project Structure section
- research.md: Backend Architecture decision, Deployment Strategy decision
- spec.md: Functional Requirements FR-021, FR-027