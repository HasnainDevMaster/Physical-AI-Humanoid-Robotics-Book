---
id: 3
title: "RAG System Architecture Decisions"
stage: explainer
date: 2025-12-25
surface: agent
model: Claude Sonnet 4.5
feature: 1-docusaurus-book
branch: 1-docusaurus-book
user: default
command: "sp.adr"
labels: ["architecture", "RAG-chatbot", "decisions", "planning"]
links:
  spec: "specs/1-docusaurus-book/spec.md"
  plan: "specs/1-docusaurus-book/plan.md"
  research: "specs/1-docusaurus-book/research.md"
  adr: "history/adr/"
  ticket: null
  pr: null
files:
  - "history/adr/ADR-011-backend-frontend-separation.md"
  - "history/adr/ADR-012-qwen-embeddings-via-dashscope.md"
  - "history/adr/ADR-013-mandatory-caching-layer.md"
  - "history/adr/ADR-014-content-indexing-workflow.md"
  - "history/adr/ADR-015-bonus-features-independent-implementation.md"
  - "history/adr/ADR-016-chatbot-ui-as-floating-widget.md"
tests: []
outcome: "Created 6 architecture decision records for RAG chatbot system"
evaluation: "ADRs document key architectural decisions with alternatives, tradeoffs, and consequences"
---

# Prompt History Record

## Prompt Text
```
sp.adr Review the generated plan and record key Architectural Decisions for AI/Spec-Driven Book Creation – Part 2: Integrated RAG Chatbot.
Focus on decisions that:

Affect multiple sections or phases
Had alternatives we considered
Will shape how we implement the RAG system and bonuses
Someone might question later (e.g., reviewers evaluating architecture, cost control, or bonus eligibility)

ADR-011: Separate Backend and Frontend with FastAPI and Docusaurus

Status: Approved
Decision: Maintain strict separation: FastAPI (Python) backend in /backend directory handling all RAG logic; Docusaurus (TypeScript) frontend only contains chatbot UI component that calls backend API endpoints.
Alternatives Considered:
Monorepo with server-side rendering 4: Index Content Once with Re-runnable Script

Status: Approved
Decision: Create a standalone indexing script that reads all /docs Markdown files, chunks them, embeds with Qwen, and upserts to Qdrant. Run manually or on major content updates—no automatic re-indexing on every build.
Alternatives Considered:
Index at build time (Docusaurus plugin)
Real-time indexing on content change
Pre-computed static vectors bundled with site

Tradeoffs: One-time/manual script balances accuracy with simplicity and cost (single large API call vs repeated). Build-time indexing risks rate limits; real-time too complex for static book.
Consequences: Requires devin Docusaurus
Fully client-side RAG using browser-based embeddings
Next.js rewrite for unified full-stack

Tradeoffs: Separation ensures clear boundaries, easier independent deployment (GitHub Pages for static frontend, Railway for backend), and aligns with spec constraints. Client-side would expose credentials and exceed browser limits; unified stack adds unnecessary complexity for a documentation site.
Consequences: Requires CORS configuration; frontend must be configurable for backend URL (local/dev vs production); simplifies scaling bonuses (e.g., auth in backend only).

ADR-012: Use Qwen text-embedding-v4 via DashScope API for Embeddings

Status: Approved
Decision: Exclusive use of Qwen text-embedding-v4 through DashScope API (OpenAI-compatible) for all vectorization needs.
Alternatives Considered:
Hugging Face serverless inference (various models)
Local open-source Qwen3-Embedding-0.6B
Cohere embeddings
OpenAI text-embedding-3

Tradeoffs: DashScope provides best multilingual performance (critical for Urdu Bonus 4), generous free quota, and seamless LangChain integration. Local avoids API costs but slower and resource-heavy; others either weaker on multilingual or risk faster quota exhaustion.
Consequences: Locks credentials to DASHSCOPE_API_KEY; enables high-quality Urdu support; caching becomes critical to stay within free tier.

ADR-013: Mandatory Caching Layer for Embeddings and Responses

Status: Approved
Decision: Implement caching at multiple levels: embedding results, retrieval chunks, and final responses using file-based cache initially (diskcache), with upgrade path to Redis free tier.
Alternatives Considered:
No caching (rely on API quota)
In-memory only (lost on restart)
Full Redis from start

Tradeoffs: Caching directly addresses token exhaustion requirement and success criteria (80%+ reduction). File-based is simplest and zero-cost; Redis adds reliability for deployed backend but extra setup.
Consequences: All query paths must check cache first; cache invalidation strategy needed for content upeloper to run script after content changes; ensures consistent, high-quality vectors.

ADR-015: Bonus Features Implemented Conditionally and Independently Where Possible

Status: Approved
Decision: Treat bonuses as optional but architected for independence: Bonus 2 (Better Auth) required for Bonus 3 (personalization), but Bonus 1 (Claude Code reuse) and Bonus 4 (Urdu translation) can be standalone.
Alternatives Considered:
Require all bonuses sequentially
Skip bonuses entirely

Tradeoffs: Conditional approach maximizes potential score while allowing partial implementation. Full dependency chain would block points if one fails.
Consequences: Neon schema designed for optional user tables; Urdu translation can use on-demand Qwen calls without auth; clear scoring path documented.

ADR-016: Chatbot UI as Floating Widget with Selected-Text Capture

Status: Approved
Decision: Implement chatbot as a floating, collapsible widget (bottom-right) with global text selection listener to capture highlighted page text and pre-fill/inject as context.
Alternatives Considered:
Sidebar-integrated chat
Per-page modal only
No selected-text support

Tradeoffs: Floating widget provides always-available access; selection capture directly satisfies core requirement without extra user steps. Sidebar would compete with Docusaurus navigation.
Consequences: Requires careful global event listeners in TypeScript component; enhances user experience significantly.
```

## Response Text
Created 6 Architecture Decision Records (ADRs) for the RAG chatbot system:

1. ADR-011: Backend-Frontend Separation - Documents the decision to maintain strict separation between FastAPI backend and Docusaurus frontend
2. ADR-012: Qwen Embeddings via DashScope - Documents the choice to use Qwen text-embedding-v4 for vectorization
3. ADR-013: Mandatory Caching Layer - Documents the caching strategy to reduce API calls and prevent token exhaustion
4. ADR-014: Content Indexing Workflow - Documents the standalone script approach for indexing book content
5. ADR-015: Bonus Features Independent Implementation - Documents the approach for implementing optional bonus features
6. ADR-016: Chatbot UI as Floating Widget - Documents the UI design decision for the chatbot interface

Each ADR follows the standard format with status, date, context, decision, alternatives considered, consequences, and references to related documents.

## Files Modified
- history/adr/ADR-011-backend-frontend-separation.md
- history/adr/ADR-012-qwen-embeddings-via-dashscope.md
- history/adr/ADR-013-mandatory-caching-layer.md
- history/adr/ADR-014-content-indexing-workflow.md
- history/adr/ADR-015-bonus-features-independent-implementation.md
- history/adr/ADR-016-chatbot-ui-as-floating-widget.md

## Outcome
Created 6 architecture decision records for RAG chatbot system