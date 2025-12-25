# ADR-003: Claude Code AI Tooling Strategy

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-22
- **Feature:** 1-docusaurus-book
- **Context:** Need to leverage AI tools for efficient content generation and formatting while maximizing the bonus points for reusable intelligence through well-designed Claude Code subagents and skills.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

- Module-specific Subagents: One dedicated subagent per module (ROS2Agent, SimulationAgent, IsaacAgent, VLAAgent)
- Cross-cutting Skills: Three reusable skills (MarkdownMasterSkill, TableGeneratorSkill, SidebarBuilderSkill)
- Purpose: Drive content generation and formatting using Claude Code
- Directory Structure: .claude/agents/ and .claude/skills/ directories

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

- Module-specific subagents ensure deep, accurate handling of technical domains
- Reusable skills prevent duplication in formatting tasks
- Creates clear evidence trail in .claude/ directories
- Shapes content quality through agent specialization
- Maximizes reusable intelligence score for bonus points
- Ensures consistent formatting across content

### Negative

- Increases development overhead initially
- Requires learning curve for agent and skill development
- Adds complexity to the project structure
- May require ongoing maintenance of agents and skills

## Alternatives Considered

- Single general-purpose agent for all tasks: Would lose specialization in technical domains
- No subagents/skills (manual writing only): Would forfeit bonus points and reduce AI-driven efficiency
- More granular subagents (one per week): Would create excessive overhead
- External AI tools only: Would not meet the Claude Code requirement

Why rejected: Single agent would lose specialization; no agents would forfeit bonuses; weekly agents would create excessive overhead; external tools would not meet Claude Code requirement.

## References

- Feature Spec: specs/1-docusaurus-book/spec.md
- Implementation Plan: specs/1-docusaurus-book/plan.md
- Related ADRs: None
- Evaluator Evidence: specs/1-docusaurus-book/research.md