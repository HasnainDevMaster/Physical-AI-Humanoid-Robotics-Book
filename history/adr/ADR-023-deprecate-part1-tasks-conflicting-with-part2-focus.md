# ADR-023: Deprecate Part 1 Tasks Conflicting with Part 2 Focus

## Status
Approved

## Date
2025-12-26

## Context
The specification analysis identified Issue A6 and unmapped tasks regarding Part 1 tasks that conflict with the Part 2 RAG focus. Specifically, tasks T012-T014 were originally created for the Part 1 Docusaurus book but may not align with the Part 2 RAG implementation focus, creating confusion and inconsistency.

## Decision
Mark T012–T014 (Part 1 backend skeleton, original agents) as deprecated or scoped to Part 1 only. New tasks reference RAG-specific backend components. This provides clear separation between Part 1 and Part 2 implementation concerns while maintaining clarity in the task structure.

## Alternatives Considered
- Delete entirely: Would lose historical context of the Part 1 work
- Keep for reference without marking: Would continue to cause confusion about focus

## Consequences
- Positive: Eliminates inconsistencies A6 and unmapped tasks; clear separation between phases; reduced confusion
- Negative: Some duplication in documentation if both parts are kept
- Risk: Need to ensure proper scoping and labeling to avoid future confusion

## References
- tasks.md: Tasks T012-T014
- Specification Analysis Report: Issue A6
- spec.md: Part 1 vs Part 2 distinction