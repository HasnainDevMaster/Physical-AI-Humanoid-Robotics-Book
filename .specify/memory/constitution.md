<!-- SYNC IMPACT REPORT
Version change: N/A → 1.0.0
Added sections: All project-specific principles and constraints
Removed sections: Template placeholders
Modified principles: All placeholder principles replaced with project-specific ones
Templates requiring updates: ⚠ pending (.specify/templates/plan-template.md, .specify/templates/spec-template.md, .specify/templates/tasks-template.md)
Follow-up TODOs: None
-->

# AI/Spec-Driven Book Creation with Integrated RAG & Personalization Constitution

## Core Principles

### I. Spec-First Development
Use Spec-Kit Plus for all technical specifications and project structure. All features and implementations must be documented in specifications before development begins.

### II. Modular Intelligence
Prioritize reusable Claude Code Subagents and Agent Skills for bonus point optimization. Build modular, reusable components that can be leveraged across the project.

### III. Retrieval Accuracy
Ensure the RAG chatbot provides high-fidelity responses strictly grounded in the book's content. All responses must be verifiable against the source material with proper citation.

### IV. User-Centricity
Focus on personalization and accessibility (Urdu translation) to enhance the reader experience. All features must prioritize user needs and accessibility requirements.

### V. Tech Stack Standardization
Use Docusaurus (Frontend), FastAPI (Backend), Neon Postgres (Auth/User Data), Qdrant Cloud (Vector DB) as the standardized technology stack. All development must align with these technologies.

### VI. Quality and Documentation
Maintain clean, documented code following Agentic patterns to maximize bonus points. All code must be well-documented and follow established patterns.

## Constraints and Requirements

### Deployment and Environment
- Must be deployable to GitHub Pages
- Ensure Qdrant and Neon configurations stay within free tier limits
- All infrastructure must work within free tier constraints

### Feature Scope
- RAG chatbot must support both global content search and user-selected text context
- Chapters must support togglable or side-by-side Urdu translations
- Integration with Better Auth for user management

### Success Criteria
- Fully functional Docusaurus site deployed to GitHub Pages
- RAG Chatbot successfully answers questions based on the book's vector embeddings
- Personalized chapter content successfully renders based on Better Auth user profiles
- 100% of bonus features implemented (Subagents, Auth, Personalization, Translation)

## Development Workflow

### Documentation and Standards
- Use Context7 MCP server for real-time Docusaurus documentation fetching
- Integration with OpenAI SDKs for RAG logic and Better Auth for user management
- Follow Spec-First Development methodology using Spec-Kit Plus

### Implementation Requirements
- Prioritize reusable Claude Code Subagents and Agent Skills
- Focus on retrieval accuracy with responses grounded in book content
- Ensure personalization and accessibility features are implemented

## Governance

This constitution supersedes all other development practices for this project. All development activities must comply with these principles and requirements. Amendments to this constitution require explicit documentation of the changes, approval from project stakeholders, and a clear migration plan for existing code.

All pull requests and code reviews must verify compliance with these principles. Any complexity introduced must be justified against these core principles.

**Version**: 1.0.0 | **Ratified**: 2025-12-22 | **Last Amended**: 2025-12-22