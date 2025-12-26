# ADR-019: Maximize Claude Code Subagent and Skill Reusability for Bonus Points

## Status
Approved

## Date
2025-12-26

## Context
The constitution emphasizes "Modular Intelligence" (Principle II) and FR-023 requires "System MUST support Bonus 1: Reusable Claude Code subagents/skills for RAG tasks". The specification analysis identified Issue A2/A9 regarding coverage gaps for reusable components. The system needs to maximize Bonus 1 points through well-designed, reusable Claude Code subagents and skills.

## Decision
Implement a modular approach to Claude Code agents and skills that emphasizes reusability:
- EmbeddingAgent: Handle content chunking and Qwen embedding calls (reusable across different content types)
- RetrieverAgent: Manage Qdrant queries and result filtering (reusable across different query types)
- ChatbotAgent: Orchestrate full RAG flow and response formatting (reusable across different contexts)
- CachingSkill: Implement cache get/set for embeddings/responses (reusable across different caching needs)
- SelectedTextSkill: Process and inject user-selected text context (reusable across different UI contexts)
- UrduTranslationSkill: On-demand translation using Qwen multilingual capabilities (reusable across different content types)

## Alternatives Considered
- Minimal agent creation: Would miss Bonus 1 points opportunity
- Hard-coded functionality without agents/skills: Would lack modularity and reusability

## Consequences
- Positive: Directly addresses constitution Principle II and maximizes Bonus 1 points; creates maintainable, modular architecture
- Negative: Slightly increased complexity in agent/skill management
- Risk: Need to ensure proper interfaces and contracts between agents and skills

## References
- constitution.md: Principle II "Modular Intelligence"
- spec.md: Functional Requirement FR-023
- tasks.md: T075 and T076 related tasks
- Specification Analysis Report: Issue A2/A9