# ADR-020: Explicit Credential Management and Security Task

## Status
Approved

## Date
2025-12-26

## Context
The specification analysis identified Issue A3 which showed inconsistency between plan.md Phase 1 mentioning "Implement credential management with .env files" and tasks.md lacking specific credential management tasks. Proper credential security is critical for API keys (Qwen, Qdrant, Neon) and must be explicitly handled to prevent accidental exposure.

## Decision
Add dedicated task for secure credential handling: create .env template, load via python-dotenv, validate presence at startup, never log values, and ensure .env is gitignored. This creates a clear, explicit security practice for credential management.

## Alternatives Considered
- Assume implicit in backend setup: Would leave security practices underspecified
- Hardcode for testing: Would create security vulnerabilities in codebase

## Consequences
- Positive: Resolves inconsistency A3; ensures secure handling of API credentials; prevents accidental exposure
- Negative: Requires additional task and documentation in Phase 1
- Risk: Potential runtime failures if .env is misconfigured

## References
- plan.md: Phase 1 "Implement credential management with .env files"
- tasks.md: Missing specific credential management task
- Specification Analysis Report: Issue A3
- spec.md: FR-028 about credential storage