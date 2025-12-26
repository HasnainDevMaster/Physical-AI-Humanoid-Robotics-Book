# ADR-014: Content Indexing via Standalone Script with Manual Execution

## Status
Accepted

## Date
2025-12-25

## Context
The RAG system needs to convert Docusaurus book content into vector embeddings stored in Qdrant. The indexing approach must balance accuracy, cost, and simplicity while supporting content updates.

## Decision
Create a standalone indexing script that reads all /docs Markdown files, chunks them using RecursiveCharacterTextSplitter, embeds with Qwen, and upserts to Qdrant. Run manually or on major content updates—no automatic re-indexing on every build.

## Alternatives Considered
- Index at build time (Docusaurus plugin): Would risk API rate limits during frequent builds and increase build times significantly
- Real-time indexing on content change: Would add complexity and require additional infrastructure for a static documentation site
- Pre-computed static vectors bundled with site: Would require storing large vector data in Git repository

## Consequences
- Positive: Balances accuracy with simplicity and cost (single large API call vs repeated); allows developer control over when indexing occurs
- Negative: Requires manual execution after content changes; potential for content and vector store to become out of sync
- Risk: Human error in running the script after content updates; need for clear documentation on when to run the indexing script

## References
- plan.md: Implementation Phases, Project Structure
- research.md: Content Indexing Workflow decision, Content Chunking Strategy decision
- spec.md: Functional Requirements FR-029