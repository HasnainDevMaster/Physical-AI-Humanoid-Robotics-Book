# ADR-002: Content Organization Strategy

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-22
- **Feature:** 1-docusaurus-book
- **Context:** Need to organize educational content in a logical, navigable structure that follows the course's natural progression and makes it intuitive for learners to find relevant information.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

- Structure: 4 core modules with hierarchical organization
- Navigation: Sidebar sections mapping weekly breakdowns as subsections under corresponding modules
- Supplementary Content: Dedicated top-level pages for Assessments and Hardware Requirements
- Module Organization: Module 1 (ROS 2), Module 2 (Gazebo/Unity), Module 3 (NVIDIA Isaac), Module 4 (VLA/Humanoid)

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

- Reinforces the course's logical progression
- Makes navigation intuitive for learners following the quarter timeline
- Enables readers to jump to specific technologies (ROS 2, Isaac, etc.)
- Maintains clean and scalable sidebar structure
- Aligns content with learning objectives

### Negative

- Content authors must align weekly material strictly under modules
- May require restructuring of content that doesn't fit module boundaries
- Could create imbalanced modules if content distribution is uneven
- Limits flexibility in content presentation

## Alternatives Considered

- Week-by-week linear structure (13 separate week pages): Would fragment related concepts
- Flat list of all topics without module grouping: Would lose hierarchy and learning progression
- Nested weeks as standalone category separate from modules: Would complicate navigation
- Chronological organization: Less thematic coherence

Why rejected: Week-by-week would fragment related concepts; flat structure would lose hierarchy; standalone weeks would complicate navigation.

## References

- Feature Spec: specs/1-docusaurus-book/spec.md
- Implementation Plan: specs/1-docusaurus-book/plan.md
- Related ADRs: None
- Evaluator Evidence: specs/1-docusaurus-book/research.md