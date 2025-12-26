# ADR-015: Bonus Features Implemented Conditionally and Independently Where Possible

## Status
Accepted

## Date
2025-12-25

## Context
The project includes optional bonus features (Claude Code reuse, Better Auth, personalization, Urdu translation) that should maximize potential score while allowing partial implementation. The architecture must support conditional implementation without blocking other features.

## Decision
Treat bonuses as optional but architected for independence: Bonus 2 (Better Auth) required for Bonus 3 (personalization), but Bonus 1 (Claude Code reuse) and Bonus 4 (Urdu translation) can be standalone.

## Alternatives Considered
- Require all bonuses sequentially: Would block points if one fails to implement
- Skip bonuses entirely: Would forfeit potential bonus points
- Full interdependency between all bonuses: Would create single point of failure for all bonuses

## Consequences
- Positive: Maximizes potential score while allowing partial implementation; clear scoring path documented; allows for phased bonus implementation
- Negative: Adds complexity to architecture to support conditional features; requires Neon schema designed for optional user tables
- Risk: Incomplete bonus implementations might create inconsistent user experience

## References
- plan.md: Implementation Phases section, Project Structure section
- research.md: Bonus Features Implementation decision
- spec.md: Functional Requirements FR-023, FR-024, FR-025, FR-030