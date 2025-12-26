# ADR-018: Dedicated Tasks for Qwen Embeddings and Qdrant Integration

## Status
Approved

## Date
2025-12-26

## Context
The specification analysis identified Issue A8 which noted that Plan Phase 3 "Qwen Embeddings and Qdrant Integration" has no corresponding task section in tasks.md. This represents a coverage gap where the architectural plan includes integration work but the implementation tasks don't adequately cover the indexing pipeline.

## Decision
Introduce a new task section specifically covering indexing pipeline: content chunking, Qwen embedding calls (DashScope text-embedding-v4), Qdrant collection creation, upsertion, and verification. This ensures proper implementation of the core RAG functionality.

## Alternatives Considered
- Assume implicit in backend setup: Would leave the integration work underspecified and potentially incomplete
- Distribute across multiple existing phases: Would fragment the cohesive indexing workflow

## Consequences
- Positive: Ensures complete implementation of embedding and vector storage functionality; clear accountability for Qwen/Qdrant integration
- Negative: May require rebalancing tasks across phases
- Risk: Additional complexity in task coordination

## References
- plan.md: Phase 3 "Qwen Embeddings and Qdrant Integration"
- tasks.md: Missing corresponding tasks
- Specification Analysis Report: Issue A8