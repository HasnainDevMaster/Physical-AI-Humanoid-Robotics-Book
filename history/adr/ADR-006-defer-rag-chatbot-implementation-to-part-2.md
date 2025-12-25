# ADR-006: Defer RAG Chatbot Implementation to Part 2 While Maintaining Architectural Compatibility

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-23
- **Feature:** 1-docusaurus-book
- **Context:** Need to resolve the CRITICAL constitution alignment issue where Constitution Principle III (RAG implementation) conflicts with Part 1 scope which explicitly excludes RAG features. The solution must maintain architectural compatibility for seamless future integration.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

- Scope: Explicitly scope Part 1 to the static Docusaurus book only
- RAG Deferral: All RAG-related functionality (OpenAI Agents/ChatKit, FastAPI backend, Neon Postgres, Qdrant, embedding of chatbot) is deferred to a future Part 2
- Compatibility Requirement: The repository structure and foundational choices in Part 1 must remain compatible with seamless RAG integration later
- Architecture: Backend directory and content Markdown files must be designed with future embedding/retrieval in mind (clean sections, unique IDs where practical)

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

- Resolves the direct constitution/spec contradiction without altering the approved constitution
- Part 1 remains focused and achievable within current scope
- Maintains architectural compatibility for Part 2 RAG implementation
- Constitution Principle III (RAG implementation) is satisfied on project level via phased delivery
- Prevents scope creep in Part 1 while ensuring future success

### Negative

- Adds minor overhead to Part 1 implementation (e.g., backend skeleton, content structuring for future vectorization)
- May create confusion about which features are in Part 1 vs Part 2
- Requires careful documentation to prevent scope creep
- Part 1 team needs to consider Part 2 implications during implementation

## Alternatives Considered

- Include minimal RAG infrastructure (e.g., basic FastAPI endpoint stubs) in Part 1: Would expand Part 1 scope beyond static content
- Update the project constitution to remove or rephase the RAG requirement: Would require broader approval and change project direction
- Cancel Part 1 phasing and implement full scope immediately: Would increase risk and complexity significantly
- Implement RAG in Part 1 despite spec exclusions: Would violate Part 1 constraints

Why rejected: Early RAG implementation would violate Part 1 boundaries; constitution change would require broader approval; full scope implementation would increase risk.

## References

- Feature Spec: specs/1-docusaurus-book/spec.md
- Implementation Plan: specs/1-docusaurus-book/plan.md
- Related ADRs: ADR-005 (Backend Skeleton Preparation)
- Evaluator Evidence: Specification Analysis Report (December 23, 2025)