---
id: 1
title: Create Project Constitution
stage: constitution
date: 2025-12-22
surface: agent
model: Claude Sonnet 4.5
feature: none
branch: main
user: Syed Hasnain Ali Shah
command: /sp.constitution
labels: ["constitution", "spec-first", "rag", "personalization", "tech-stack"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
 - .specify/templates/plan-template.md
tests:
 - none
---

## Prompt

/sp.constitution

Project: AI/Spec-Driven Book Creation with Integrated RAG & Personalization

Core Principles:
- Spec-First Development: Use Spec-Kit Plus for all technical specifications and project structure.
- Modular Intelligence: Prioritize reusable Claude Code Subagents and Agent Skills for bonus point optimization.
- Retrieval Accuracy: Ensure the RAG chatbot provides high-fidelity responses strictly grounded in the book's content.
- User-Centricity: Focus on personalization and accessibility (Urdu translation) to enhance the reader experience.

Key Standards:
- Tech Stack: Docusaurus (Frontend), FastAPI (Backend), Neon Postgres (Auth/User Data), Qdrant Cloud (Vector DB).
- Documentation: Use Context7 MCP server for real-time Docusaurus documentation fetching.
- Integration: OpenAI SDKs for RAG logic; Better Auth for user management.
- Code Quality: Clean, documented code following Agentic patterns to maximize bonus points.

Constraints:
- Environment: Must be deployable to GitHub Pages.
- Free Tier Limits: Ensure Qdrant and Neon configurations stay within free tier limits.
- RAG Scope: Chatbot must support both global content search and user-selected text context.
- Language: Chapters must support togglable or side-by-side Urdu translations.

Success Criteria:
- Fully functional Docusaurus site deployed to GitHub Pages.
- RAG Chatbot successfully answers questions based on the book's vector embeddings.
- Personalized chapter content successfully renders based on Better Auth user profiles.
- 100% of bonus features implemented (Subagents, Auth, Personalization, Translation).

## Response snapshot

Updated the project constitution with specific principles and requirements for the AI/Spec-Driven Book Creation project. Created six core principles: Spec-First Development, Modular Intelligence, Retrieval Accuracy, User-Centricity, Tech Stack Standardization, and Quality and Documentation. Added constraints for deployment, feature scope, and success criteria. Updated the plan template to include constitution compliance checks.

## Outcome
- ✅ Impact: Created project-specific constitution replacing generic template
- 🧪 Tests: none
- 📁 Files: Updated .specify/memory/constitution.md and .specify/templates/plan-template.md
- 🔁 Next prompts: Continue with spec, plan, and tasks creation for the project
- 🧠 Reflection: Proper project governance established with clear principles and constraints

## Evaluation notes (flywheel)
- Failure modes observed: Script .specify/scripts/bash/create-phr.sh did not exist, required fallback to manual creation method
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Ensure create-phr.sh script is available in project setup