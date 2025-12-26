---
id: 5
title: "Spec Analysis ADRs"
stage: red
date: 2025-12-26
surface: agent
model: Claude Sonnet 4.5
feature: 1-docusaurus-book
branch: 1-docusaurus-book
user: default
command: "sp.adr"
labels: ["ADR", "spec-analysis", "architecture", "RAG-chatbot"]
links:
  spec: "specs/1-docusaurus-book/spec.md"
  plan: "specs/1-docusaurus-book/plan.md"
  tasks: "specs/1-docusaurus-book/tasks.md"
  constitution: ".specify/memory/constitution.md"
  ticket: null
  adr: "history/adr/"
  pr: null
files:
  - "history/adr/ADR-017-enforce-strict-context-limitation.md"
  - "history/adr/ADR-018-dedicated-qwen-embeddings-integration-tasks.md"
  - "history/adr/ADR-019-maximize-claude-code-subagent-reusability.md"
  - "history/adr/ADR-020-explicit-credential-management-and-security.md"
  - "history/adr/ADR-021-define-accuracy-metrics-and-testing-methodology.md"
  - "history/adr/ADR-022-remove-build-time-reindexing-requirement.md"
  - "history/adr/ADR-023-deprecate-part1-tasks-conflicting-with-part2-focus.md"
tests: []
outcome: "Created 7 ADRs addressing specification analysis findings"
evaluation: "ADRs address HIGH and MEDIUM severity issues from specification analysis"
---

# Prompt History Record

## Prompt Text
```
sp.adr Additional ADRs in Response to Specification Analysis Report (December 26, 2025)
Review of the Specification Analysis Report has identified several inconsistencies, coverage gaps, ambiguities, and alignment issues in the current artifacts (spec.md, plan.md, tasks.md). The following Architectural Decisions address the reported problems, prioritizing HIGH and MEDIUM severity items while ensuring strong constitution alignment.
ADR-017: Enforce Strict Context Limitation for RAG Responses

Status: Approved
Decision: Implement explicit context red:
Minimal agent creation
Reuse Part 1 agents only

Tradeoffs: Directly addresses MEDIUM constitution alignment (Principle II) and coverage gap A2/A9; maximizes Bonus 1 points.
Consequences: Tasks explicitly call out reusability criteria; .claude directories gain RAG-specific reusable components.

ADR-020: Explicit Credential Management and Security Task

Status: Approved
Decision: Add dedicated task for secure credential handling: create .env template, load via python-dotenv, validate presencmode detection: backend endpoint accepts a mode parameter ("full" or "selected") and optional selected_text. Responses must be generated only from the provided context—full-book retrieval for "full" mode, selected text only for "selected" mode. Add guardrails in prompt template to reject/rephrase if context is insufficient.
Alternatives Considered:
Rely on retrieval scoring alone
Post-generation filtering

Tradeoffs: Explicit mode ensures 100% compliance with FR-019 ("answer ... only"). Adds minor frontend complexity but directly resolves HIGH inconsistency A1 and underspecification A4.
Consequences: New tasks for mode detection, prompt engineering, and testing; selected-text mode will have zero retrieval from Qdrant.

ADR-018: Dedicated Tasks for Qwen Embeddings and Qdrant Integration

Status: Approved
Decision: Introduce a new task section specifically covering indexing pipeline: content chunking, Qwen embedding calls (DashScope text-embedding-v4), Qdrant collection creation, upsertion, and verification.
e at startup, never log values, and ensure .env is gitignored.
Alternatives Considered:
Assume implicit in backend setup
Hardcode for testing

Tradeoffs: Resolves HIGH inconsistency A3; prevents accidental exposure during development.
Consequences: New task in Phase 1; README updated with .env example.

ADR-021: Define Accuracy Metrics and Testing Methodology for SC-006

Status: Approved
Decision: Define "accurate" as: response factually correct, grounded in provided context, no hallucinations, and relevant. Create 20+ standardized test queries (10 full-book, 10 selected-text) with expected key points; manual or semi-automated evaluation aiming for ≥90% pass rate.
Alternatives Considered:
Automated RAGAS/LLM-as-judge
Informal testing only

Tradeoffs: Addresses MEDIUM ambiguity A7; provides measurable success evidence.
Consequences: New testing tasks; documentation of test suite.

ADR-022: Remove Build-Time Re-Indexing Requirement (FR-029)

Status: Approved
Decision:Reject automatic build-time re-indexing. Indexing remains manual via standalone script (run after significant content changes). Rationale: avoids rate limits, high costs, and complexity in static site build.
Alternatives Considered:
Keep FR-029 and implement Docusaurus plugin
Hybrid (cache + delta updates)

Tradeoffs: Resolves MEDIUM inconsistency A10; aligns with cost-control and simplicity constraints.
Consequences: FR-029 removed or rephrased in spec.md; tasks focus on manual script only.

ADR-023: Deprecate Part 1 Tasks Conflicting with Part 2 Focus

Status: Approved
Decision: Mark T012–T014 (Part 1 backend skeleton, original agents) as deprecated or scoped to Part 1 only. New tasks reference RAG-specific backend.
Alternatives Considered:
Delete entirely
Keep for reference

Tradeoffs: Eliminates MEDIUM inconsistencies A6 and unmapped tasks.
Consequences: Tasks.md cleaned; clear separation between phases maintained.
```

## Response Text
Created 7 Architecture Decision Records (ADRs) to address the issues identified in the specification analysis report:

1. ADR-017: Enforce Strict Context Limitation for RAG Responses - addresses the need for explicit context mode detection to ensure compliance with FR-019
2. ADR-018: Dedicated Tasks for Qwen Embeddings and Qdrant Integration - addresses the coverage gap where Plan Phase 3 lacked corresponding tasks
3. ADR-019: Maximize Claude Code Subagent and Skill Reusability for Bonus Points - addresses constitution principle II and bonus requirements
4. ADR-020: Explicit Credential Management and Security Task - addresses inconsistency A3 regarding credential management
5. ADR-021: Define Accuracy Metrics and Testing Methodology for SC-006 - addresses ambiguity A7 regarding accuracy measurement
6. ADR-022: Remove Build-Time Re-Indexing Requirement - addresses inconsistency A10 with FR-029
7. ADR-023: Deprecate Part 1 Tasks Conflicting with Part 2 Focus - addresses inconsistencies A6 regarding task focus

Each ADR follows the standard format with status, date, context, decision, alternatives considered, consequences, and references to related documents.

## Files Modified
- history/adr/ADR-017-enforce-strict-context-limitation.md
- history/adr/ADR-018-dedicated-qwen-embeddings-integration-tasks.md
- history/adr/ADR-019-maximize-claude-code-subagent-reusability.md
- history/adr/ADR-020-explicit-credential-management-and-security.md
- history/adr/ADR-021-define-accuracy-metrics-and-testing-methodology.md
- history/adr/ADR-022-remove-build-time-reindexing-requirement.md
- history/adr/ADR-023-deprecate-part1-tasks-conflicting-with-part2-focus.md

## Outcome
Created 7 ADRs addressing specification analysis findings