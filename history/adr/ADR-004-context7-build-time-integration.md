# ADR-004: Context7 Build-Time Integration

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-22
- **Feature:** 1-docusaurus-book
- **Context:** Need to leverage Context7 MCP server for accurate documentation during development while maintaining the static nature of the deployed site for Part 1.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

- Integration Time: Build/development time only via Claude Code tool calls
- Target: Fetch up-to-date documentation for Docusaurus, ROS 2, NVIDIA Isaac, etc.
- Runtime: No dynamic fetching in deployed static site
- Process: Claude Code invokes Context7 during AI-assisted development

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

- Ensures content accuracy by using current library versions
- No additional runtime dependencies or deployment concerns
- Aligns perfectly with AI/spec-driven workflow
- Maintains static site properties for Part 1
- Provides up-to-date examples and explanations

### Negative

- Requires Claude Code access during development
- No automatic updates after initial content creation
- Potential version mismatches if documentation changes rapidly
- Limited to build-time content updates

## Alternatives Considered

- Manual doc lookup and copy-paste: Would require more manual effort and not stay current
- Runtime dynamic loading in the book: Would conflict with Part 1's static-only requirement
- Ignore Context7 entirely: Would miss the benefit of current documentation
- Periodic manual updates: Would not maintain currency automatically

Why rejected: Manual lookup would be inefficient; runtime loading would violate static site requirement; ignoring Context7 would miss accuracy benefits; periodic updates would not maintain currency.

## References

- Feature Spec: specs/1-docusaurus-book/spec.md
- Implementation Plan: specs/1-docusaurus-book/plan.md
- Related ADRs: None
- Evaluator Evidence: specs/1-docusaurus-book/research.md