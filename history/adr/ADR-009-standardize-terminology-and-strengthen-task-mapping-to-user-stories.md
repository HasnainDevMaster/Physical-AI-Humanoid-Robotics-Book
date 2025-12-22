# ADR-009: Standardize Terminology and Strengthen Task Mapping to User Stories

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-23
- **Feature:** 1-docusaurus-book
- **Context:** Need to resolve LOW terminology drift I2 and improve coverage gaps U1, U2, D2 from the specification analysis by standardizing terminology across artifacts and ensuring traceability between tasks, user stories, and functional requirements.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

- Terminology Standardization: Adopt consistent terminology: "book content" → "course content" across all artifacts
- Task Traceability: Explicitly map every new or adjusted task to at least one User Story acceptance criterion or Functional Requirement in future task updates
- Documentation Consistency: Use unified language across spec.md, plan.md, and tasks.md
- Quality Assurance: Include traceability checks in future reviews to ensure alignment between artifacts

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

- Addresses LOW terminology drift I2 from analysis
- Improves coverage gaps U1, U2, D2 by ensuring upcoming task additions are directly traceable
- Enhances clarity and reduces confusion during implementation
- Improves review and validation processes
- Creates better alignment between specifications and implementation
- Facilitates communication across team members

### Negative

- Requires additional documentation effort for traceability
- May slow down task creation process initially
- Adds overhead to review processes
- Requires discipline to maintain consistency over time
- May require updates to existing artifacts

## Alternatives Considered

- Leave terminology varied for context-specific nuance: Would continue the identified terminology drift
- Minimal traceability approach: Would not address the identified coverage gaps
- Tool-based traceability: Would add complexity to the process
- Accept the inconsistencies: Would continue to cause confusion during implementation

Why rejected: Varied terminology would continue drift; minimal approach would not address gaps; tooling would add unnecessary complexity; accepting inconsistencies would continue implementation issues.

## References

- Feature Spec: specs/1-docusaurus-book/spec.md
- Implementation Plan: specs/1-docusaurus-book/plan.md
- Task List: specs/1-docusaurus-book/tasks.md
- Related ADRs: None
- Evaluator Evidence: Specification Analysis Report (December 23, 2025)