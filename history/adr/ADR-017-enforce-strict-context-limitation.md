# ADR-017: Enforce Strict Context Limitation for RAG Responses

## Status
Approved

## Date
2025-12-26

## Context
The RAG system must comply with FR-019 which states that the chatbot "MUST answer queries based on full book content or user-selected text only". The specification analysis revealed inconsistency A1 where the requirement exists but the implementation tasks don't adequately enforce the context limitation. Without explicit enforcement, there's risk of responses containing information outside the specified context.

## Decision
Implement explicit context mode detection: backend endpoint accepts a mode parameter ("full" or "selected") and optional selected_text. Responses must be generated only from the provided context—full-book retrieval for "full" mode, selected text only for "selected" mode. Add guardrails in prompt template to reject/rephrase if context is insufficient.

## Alternatives Considered
- Rely on retrieval scoring alone: Less reliable, doesn't guarantee 100% compliance with context limitation
- Post-generation filtering: Adds complexity and may result in lower quality responses after filtering

## Consequences
- Positive: Ensures 100% compliance with FR-019 requirement; provides clear separation between context modes
- Negative: Adds minor complexity to backend endpoint and prompt engineering
- Risk: Selected-text mode will have zero retrieval from Qdrant when in selected-text mode

## References
- spec.md: Functional Requirement FR-019
- tasks.md: Related to T086 and T087
- Specification Analysis Report: Issue A1