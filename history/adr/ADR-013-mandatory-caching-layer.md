# ADR-013: Mandatory Caching Layer for Embeddings and Responses

## Status
Accepted

## Date
2025-12-25

## Context
The RAG system must reduce API calls by 80%+ to prevent token exhaustion and stay within free tier limits. The system needs to cache embedding results, retrieval chunks, and final responses to meet performance and cost requirements.

## Decision
Implement caching at multiple levels: embedding results, retrieval chunks, and final responses using file-based cache initially (diskcache), with upgrade path to Redis free tier.

## Alternatives Considered
- No caching (rely on API quota): Would not meet the 80%+ reduction requirement and risk exceeding free tier limits
- In-memory only (lost on restart): Would lose cached data on server restarts, reducing effectiveness
- Full Redis from start: Would add complexity and setup requirements before necessary

## Consequences
- Positive: Directly addresses token exhaustion requirement and success criteria (80%+ reduction); reduces API costs and improves response times for repeated queries
- Negative: All query paths must check cache first; requires cache invalidation strategy for content updates; adds complexity to implementation
- Risk: Cache invalidation complexity; potential for stale data if content updates don't trigger proper cache clearing

## References
- plan.md: Technical Context section, Performance Goals
- research.md: Caching Strategy decision
- spec.md: Functional Requirements FR-020, Success Criteria SC-008