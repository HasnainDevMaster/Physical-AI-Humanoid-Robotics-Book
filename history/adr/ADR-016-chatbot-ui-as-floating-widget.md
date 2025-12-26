# ADR-016: Chatbot UI as Floating Widget with Selected-Text Capture

## Status
Accepted

## Date
2025-12-25

## Context
The RAG chatbot needs to be accessible throughout the Docusaurus book without interfering with the primary educational content. Users should be able to ask questions about specific content sections easily.

## Decision
Implement chatbot as a floating, collapsible widget (bottom-right) with global text selection listener to capture highlighted page text and pre-fill/inject as context.

## Alternatives Considered
- Sidebar-integrated chat: Would compete with Docusaurus navigation and take up valuable sidebar space
- Per-page modal only: Would require explicit activation on each page and reduce accessibility
- No selected-text support: Would not satisfy core requirement for context-based queries

## Consequences
- Positive: Provides always-available access; selection capture directly satisfies core requirement without extra user steps; enhances user experience significantly
- Negative: Requires careful global event listeners in TypeScript component; potential for UI clutter if not designed well
- Risk: Global event listeners may interfere with other page functionality; requires careful design to avoid being intrusive

## References
- plan.md: Implementation Phases section, Project Structure section
- research.md: Frontend Integration decision, Selected Text Feature decision
- spec.md: Functional Requirements FR-014, FR-019