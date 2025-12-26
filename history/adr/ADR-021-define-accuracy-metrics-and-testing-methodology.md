# ADR-021: Define Accuracy Metrics and Testing Methodology for SC-006

## Status
Approved

## Date
2025-12-26

## Context
The specification analysis identified Issue A7 regarding ambiguity in success criterion SC-006: "Chatbot responds to 90% of test queries accurately within 5 seconds, using book content only". The criterion doesn't define what constitutes "accurate" responses, making it difficult to measure and validate the requirement.

## Decision
Define "accurate" as: response factually correct, grounded in provided context, no hallucinations, and relevant. Create 20+ standardized test queries (10 full-book, 10 selected-text) with expected key points; manual or semi-automated evaluation aiming for ≥90% pass rate.

## Alternatives Considered
- Automated RAGAS/LLM-as-judge: Would add complexity and potential bias in evaluation
- Informal testing only: Would not provide measurable success evidence

## Consequences
- Positive: Addresses ambiguity A7; provides measurable success evidence; clear validation methodology
- Negative: Requires additional testing tasks and documentation
- Risk: Manual evaluation may be time-consuming but ensures quality

## References
- spec.md: Success Criterion SC-006
- Specification Analysis Report: Issue A7
- tasks.md: Testing tasks related to accuracy validation