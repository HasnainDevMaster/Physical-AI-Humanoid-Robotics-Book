# ADR-005: Backend Skeleton Preparation

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-22
- **Feature:** 1-docusaurus-book
- **Context:** Need to satisfy the specification's mention of Python backend preparation while maintaining the boundaries of Part 1 (no running services required).

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

- Directory: Create /backend directory with FastAPI project structure
- Files: Include main.py, requirements.txt, and basic router structure
- Functionality: Leave non-functional for Part 1 (no running server)
- Purpose: Prepare for Part 2 development (RAG chatbot features)

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

- Repository is future-ready for Part 2 development
- Clear separation of concerns maintained between Part 1 and Part 2
- Satisfies the specification's mention of Python backend preparation
- Provides a foundation for future backend features
- Maintains Part 1 boundaries while preparing for Part 2

### Negative

- Adds files that aren't immediately used
- May confuse developers about Part 1 scope
- Requires maintaining backend dependencies without using them
- Potential for scope creep if not carefully managed

## Alternatives Considered

- No backend code at all: Would make future integration harder
- Full FastAPI server implementation early: Would violate Part 1 boundaries
- Minimal placeholder files: Would provide less preparation for Part 2
- Separate repository for Part 2: Would complicate project structure

Why rejected: No code would make future integration harder; full implementation would violate Part 1 boundaries; minimal placeholders would provide insufficient preparation; separate repository would add complexity.

## References

- Feature Spec: specs/1-docusaurus-book/spec.md
- Implementation Plan: specs/1-docusaurus-book/plan.md
- Related ADRs: None
- Evaluator Evidence: specs/1-docusaurus-book/research.md