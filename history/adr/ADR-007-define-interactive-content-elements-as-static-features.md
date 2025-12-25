# ADR-007: Define "Interactive Content Elements" as Static Docusaurus Features Only (No Runtime Interactivity in Part 1)

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-23
- **Feature:** 1-docusaurus-book
- **Context:** Need to resolve ambiguity A2 and inconsistency I1 from the specification analysis by clearly defining what "interactive content elements" means for Part 1, ensuring alignment between spec, plan and tasks.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

- Static Features Only: In Part 1, "interactive content elements" are limited to built-in static Docusaurus capabilities
- Specific Features: Searchable docs, collapsible admonitions, tabs, code blocks with copy buttons, syntax-highlighted executable-looking snippets (no actual execution), Mermaid diagrams, and responsive tables
- Excluded Features: No quizzes, live code editors, or runtime JS-heavy components
- Implementation Focus: Emphasis on Mermaid diagrams for architecture flows, tabulated hardware comparisons, and code snippets with ROS 2/NVIDIA Isaac examples

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

- Resolves ambiguity A2 and inconsistency I1 from analysis report
- Aligns with static site constraint while maximizing reader engagement within Docusaurus strengths
- Avoids scope creep into dynamic features reserved for Part 2
- Enhances coverage of "user-can-interact-with-content" requirement
- Provides clear implementation guidelines for team
- Maintains performance and simplicity of static site

### Negative

- May limit user engagement compared to dynamic interactive features
- Requires more creative use of static features to achieve interactivity goals
- May not fully meet all expectations for "interactive" content
- Limits future interactivity options until Part 2

## Alternatives Considered

- Broader interpretation including custom React components (e.g., expandable simulations): Would introduce runtime complexity beyond Part 1 scope
- Minimal interpretation (only basic Markdown): Would not meet interactive requirements
- Hybrid approach with limited JS widgets: Would add complexity to static site
- External interactive tools integration: Would violate self-contained static site requirement

Why rejected: Custom components would violate Part 1 static constraint; minimal approach would not meet requirements; hybrid approach would add unwanted complexity.

## References

- Feature Spec: specs/1-docusaurus-book/spec.md
- Implementation Plan: specs/1-docusaurus-book/plan.md
- Related ADRs: ADR-001 (Frontend Technology Stack)
- Evaluator Evidence: Specification Analysis Report (December 23, 2025)