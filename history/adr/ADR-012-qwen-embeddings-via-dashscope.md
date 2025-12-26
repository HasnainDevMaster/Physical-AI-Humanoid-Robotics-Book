# ADR-012: Use Qwen text-embedding-v4 via DashScope API for Embeddings

## Status
Accepted

## Date
2025-12-25

## Context
The RAG system requires high-quality text embeddings to create vector representations of book content for similarity search. The system must support multilingual capabilities (specifically Urdu for Bonus 4) while staying within free tier limits for cost control.

## Decision
Exclusive use of Qwen text-embedding-v4 through DashScope API (OpenAI-compatible) for all vectorization needs in the RAG system.

## Alternatives Considered
- Hugging Face serverless inference (various models): Would require different integration patterns and potentially different performance characteristics
- Local open-source Qwen3-Embedding-0.6B: Would avoid API costs but consume more computational resources and potentially be slower
- Cohere embeddings: Would require different API integration and may not have the same multilingual performance
- OpenAI text-embedding-3: Would not have the same multilingual capabilities critical for Urdu Bonus 4

## Consequences
- Positive: Provides best multilingual performance (critical for Urdu Bonus 4), generous free quota, and seamless LangChain integration; enables high-quality Urdu support
- Negative: Creates dependency on DashScope API availability; caching becomes critical to stay within free tier limits
- Risk: Locks credentials to DASHSCOPE_API_KEY; potential vendor lock-in to DashScope platform

## References
- plan.md: Technical Context section, Implementation Phases
- research.md: Embedding Model Selection decision
- spec.md: Functional Requirements FR-016, FR-030