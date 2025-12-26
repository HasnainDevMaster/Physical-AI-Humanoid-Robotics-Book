# ADR-022: Remove Build-Time Re-Indexing Requirement (FR-029)

## Status
Approved

## Date
2025-12-26

## Context
The specification analysis identified Issue A10 regarding inconsistency with FR-029 which states "System MUST re-index book content during build process when content changes to ensure RAG accuracy". This requirement conflicts with practical constraints of rate limits, costs, and complexity in static site builds, as noted in the analysis.

## Decision
Reject automatic build-time re-indexing. Indexing remains manual via standalone script (run after significant content changes). Rationale: avoids rate limits, high costs, and complexity in static site build process. Content updates will be handled through manual execution of the indexing script.

## Alternatives Considered
- Keep FR-029 and implement Docusaurus plugin: Would add significant complexity and potential build-time failures
- Hybrid approach (cache + delta updates): Would still add complexity to the build process

## Consequences
- Positive: Resolves inconsistency A10; aligns with cost-control and simplicity constraints; avoids rate limit issues
- Negative: Requires manual intervention when content changes; potential for content/index desynchronization
- Risk: Developers need to remember to run indexing script after content changes

## References
- spec.md: Functional Requirement FR-029
- Specification Analysis Report: Issue A10
- plan.md: Phase 2 "Content Ingestion and Indexing"