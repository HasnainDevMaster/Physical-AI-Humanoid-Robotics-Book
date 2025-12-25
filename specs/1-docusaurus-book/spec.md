# Feature Specification: Interactive Docusaurus Book with Integrated RAG Chatbot for Physical AI & Humanoid Robotics

**Feature Branch**: `1-docusaurus-book`
**Created**: 2025-12-22
**Updated**: 2025-12-25
**Status**: Draft (Part 1 Complete; Part 2 In Progress)
**Input**: User description: "AI/Spec-Driven Book Creation – Part 1: Interactive Docusaurus Book
Target audience: Students, researchers, and professionals in AI and robotics with a computer science background; interested in Physical AI, embodied intelligence, and humanoid robotics.
Focus: Create and deploy a complete, high-quality, interactive web-based book using Docusaurus that fully documents the course 'Physical AI & Humanoid Robotics.' The book must be structured around 4 core modules, with content organized into chapters and sections reflecting the provided weekly breakdowns. Development must be AI/spec-driven tion/content.
GitHub repository is well-organized, version-controlled, and includes clear README with deployment instructions.
Bonus points (evaluated separately):
Up to 50 points for effective, reusable intelligence via well-designed Claude Code subagents and skills
Remaining bonuses (authentication, personalization, Urdu translation) deferred to Part 2


Constraints:

Content source: Strictly limited to the provided course details—no additions, speculative content, or external topics.
Structure: 4 main modules as top-level sections/chapters; weekly breakdowns mapped logically into module sections (e.g., Weeks 1–2 as introduction chapter, Weeks 3–5 under Module 1, etc.).
Tools: Docusaurus (latest stable version), Spec-Kit Plus for specification management, Claude Code for AI-assisted development and subagent/skill creation.
Languages: Frontend – TypeScript/TSX; Backend preparation – Python (FastAPI-ready structure if needed).
Services: GitHub Pages for deployment; Context7 MCP server for docs fetching; free tiers only.
Subagents/Skills storage: Exactly as specified—.claude/agents/ for subagents, .claude/skills/ for skills.
No implementation of RAG chatbot or user authentication in this part (reserved for Part 2).

Not building (in this part):

Retrieval-Augmented Generation (RAG) chatbot or any embedded chat functionality
User signup/signin (Better Auth or otherwise)
Personalized content based on user background
Urdu translation functionality per chapter
Any backend services beyond preparatory Python structure (e.g., no live FastAPI server, no database integration)
Standalone applications or non-Docusaurus outputs"

Part 2 Input: "AI/Spec-Driven Book Creation – Part 2: Integrated RAG Chatbot Development
Build and embed a Retrieval-Augmented Generation (RAG) chatbot within the published book. This chatbot, utilizing the OpenAI Agents/ChatKit SDKs, FastAPI, Neon Postgres Database, and Qdrant Cloud Free Tier, must be able to answer user questions about the book's content, including answering questions based only on text selected by the user.
Bonus Points System as specified.
Using OpenAI chat completions with Qwen for embeddings. Must use caching layer to prevent token exhaustion.
Backend and frontend separate.
Direct Claude Code to edit and update the current spec.md in directory 1-docusaurus-book.
Credentials: Provided for Qwen (DashScope API Key), Qdrant (Cluster endpoint and API Key), Neon (Connection string)."

## Clarifications

### Session 2025-12-22 (Part 1)

- Q: What specific version and feature set of Docusaurus should be used for the interactive elements? → A: Latest stable version with search, code blocks, and responsive design
- Q: How should the weekly breakdowns be logically mapped into module sections? → A: Weeks 1-2 as introduction module, Weeks 3-5 under Module 1, Weeks 6-8 under Module 2, etc.
- Q: What level of TypeScript usage is expected in the frontend implementation? → A: Strict typing for all custom components and core functionality
- Q: Does "no additions, speculative content" allow for brief explanations of complex terms within the provided content? → A: Yes, brief clarifications of complex terms are allowed
- Q: How should the Context7 MCP server be integrated for docs fetching? → A: Via API calls during build process for content updates

### Session 2025-12-25 (Part 2)

- Q: How to integrate Qwen embeddings with OpenAI-compatible completions? → A: Use DashScope API for Qwen text-embedding-v4 embeddings; leverage OpenAI Agents/ChatKit SDKs for agentic logic and chat completions (compatible endpoints if needed)
- Q: What caching layer to use for token exhaustion prevention? → A: Implement a simple local file-based cache or Redis free tier for embedding results and query responses
- Q: How to handle separate frontend/backend? → A: Docusaurus (TypeScript) for frontend chatbot UI component; FastAPI (Python) for backend RAG endpoints
- Q: Integration of credentials? → A: Store in .env file; load via python-dotenv in backend
- Q: Bonus implementations? → A: Optional but evaluated: Reuse Claude Code subagents/skills (Bonus 1); Better Auth for signup/signin with background questions (Bonus 2); Personalize chapter content via user data in Neon (Bonus 3); Urdu translation per chapter using Qwen's multilingual capabilities (Bonus 4)
- Q: How should the RAG chatbot UI be embedded in the Docusaurus interface? → A: Floating widget that appears on all pages
- Q: What specific tasks should the Claude Code subagents and skills perform for RAG functionality? → A: Enhance RAG queries with context and improve response accuracy
- Q: How should the system handle errors in Qdrant/Neon connections for the RAG functionality? → A: Graceful fallback with user notifications when services are unavailable
- Q: What exact model/version of Qwen embeddings should be used? → A: Use Qwen text-embedding-v4 via DashScope API as specified
- Q: What deployment platform for the FastAPI backend is assumed? → A: Separate deployment from Docusaurus frontend, e.g., Railway, Heroku, or similar cloud platforms that support Python/ FastAPI
- Q: What level of security is expected for .env credentials? → A: Store in .env file, exclude from version control via .gitignore, and use environment variables in production deployment
- Q: How recent or up-to-date should the book content be for RAG indexing? → A: Content should be re-indexed during build process when book content changes
- Q: How should Urdu translation be implemented per chapter for Bonus 4? → A: On-demand translation using Qwen's multilingual capabilities when user selects Urdu language option

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Access Interactive Book Content (Priority: P1)

Students, researchers, and professionals in AI and robotics access the interactive Docusaurus book to learn about Physical AI & Humanoid Robotics. They can navigate through 4 core modules with organized chapters and sections reflecting weekly breakdowns.

**Why this priority**: This is the core functionality that delivers the primary value of the book - allowing users to access and learn from the content.

**Independent Test**: Users can successfully navigate to the deployed book site, access the first module, and read the content. The book provides a good learning experience with proper navigation.

**Acceptance Scenarios**:
1. **Given** a user accesses the book URL, **When** they navigate through the table of contents, **Then** they can access all 4 core modules and their respective sections
2. **Given** a user is reading a chapter, **When** they click on navigation links, **Then** they can move between sections seamlessly

---

### User Story 2 - Experience Interactive Content (Priority: P2)

Users interact with the book content through interactive elements, code samples, and examples that enhance their understanding of Physical AI and humanoid robotics concepts.

**Why this priority**: Interactive elements significantly improve the learning experience and engagement for the target audience.

**Independent Test**: Users can interact with code samples, diagrams, and other interactive elements within the book and see them function properly.

**Acceptance Scenarios**:
1. **Given** a user encounters an interactive code sample, **When** they view or interact with it, **Then** the code is properly displayed and functional

---

### User Story 3 - Access Book on Multiple Devices (Priority: P3)

Users access the book content from various devices (desktop, tablet, mobile) with responsive design that adapts to different screen sizes.

**Why this priority**: Ensures accessibility for users who may access the book from different devices based on their preference or availability.

**Independent Test**: The book displays properly and remains functional across different device types and screen sizes.

**Acceptance Scenarios**:
1. **Given** a user accesses the book from a mobile device, **When** they navigate through content, **Then** the layout adapts appropriately for the smaller screen

---

### Part 2 User Stories
### User Story 4 - Query Book Content via RAG Chatbot (Priority: P1)

Users ask questions about the book's content through an embedded chatbot, receiving accurate, context-aware responses based on the full book or selected text.
**Why this priority**: The RAG chatbot is the core feature of Part 2, enabling interactive Q&A to enhance learning.
**Independent Test**: Users input queries in the chatbot UI and receive relevant responses drawn from book content.
**Acceptance Scenarios**:
1. **Given** a user asks a question about a module, **When** the chatbot processes it, **Then** the response is accurate and cites book sections
2. **Given** a user selects text and queries based on it, **When** the chatbot responds, **Then** it uses only the selected text as context

---
### User Story 5 - Experience Bonus Features (Priority: P2)

Users benefit from optional bonuses: Authentication for personalized experiences, content personalization based on background, and Urdu translation.
**Why this priority**: Bonuses add value and points; they extend core functionality.
**Independent Test**: If implemented, users can sign up, see personalized content, and toggle Urdu translation.
**Acceptance Scenarios**:
1. **Given** a user signs up with background info, **When** they view a chapter, **Then** content is personalized
2. **Given** a user selects Urdu mode, **When** viewing a chapter, **Then** content translates accurately

---

### Edge Cases (Updated for Part 2)

- What happens when users access the book with limited internet connectivity? (Chatbot may fallback to cached responses)
- How does the system handle users with different accessibility needs? (Ensure chatbot UI is accessible)
- What if the GitHub Pages deployment fails? (Fallback to local dev)
- What if Qwen API quota exhausts? (Use caching to minimize calls)
- How to handle invalid or out-of-context queries in chatbot?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST structure the book content around 4 core modules with organized chapters and sections
- **FR-002**: System MUST deploy the book to GitHub Pages for public access
- **FR-003**: Users MUST be able to navigate between all book sections using a table of contents
- **FR-004**: System MUST organize content reflecting the weekly breakdowns as specified
- **FR-005**: System MUST support interactive content elements (code samples, diagrams, etc.)
- **FR-006**: System MUST be responsive and accessible across different devices and screen sizes
- **FR-007**: System MUST be version-controlled in the GitHub repository
- **FR-008**: System MUST include a clear README with deployment instructions that allow setup within 10 minutes
- **FR-009**: System MUST use latest stable Docusaurus version with search, code blocks, and responsive design features
- **FR-010**: System MUST organize content with Weeks 1-2 as introduction module, Weeks 3-5 under Module 1, Weeks 6-8 under Module 2, etc.
- **FR-011**: System MUST implement strict typing for all custom components and core functionality
- **FR-012**: System MUST allow brief clarifications of complex terms while maintaining source content integrity
- **FR-013**: System MUST integrate Context7 MCP server via API calls during build process for content updates

Part 1 Functional Requirements (Unchanged)

Part 2 Functional Requirements

- **FR-014**: System MUST embed a floating RAG chatbot widget in Docusaurus (TypeScript component) that appears on all pages and communicates with FastAPI backend
- **FR-015**: Backend MUST use OpenAI Agents/ChatKit SDKs for agentic logic and chat completions (OpenAI-compatible)
- **FR-016**: System MUST use Qwen text-embedding-v4 (DashScope API) for embeddings, with provided API key in .env
- **FR-017**: System MUST store vectors in Qdrant Cloud (free tier) using provided endpoint and API key in .env
- **FR-018**: System MUST use Neon Postgres for metadata/storage (e.g., user data for bonuses) with provided connection string in .env
- **FR-019**: Chatbot MUST answer queries based on full book content or user-selected text only
- **FR-020**: System MUST implement a caching layer (e.g., local file or Redis free tier) for embeddings and responses to prevent token exhaustion
- **FR-021**: Backend (FastAPI/Python) and frontend (Docusaurus/TS) MUST be separate, with API endpoints for query handling
- **FR-022**: Claude Code MUST be directed to edit/update this spec.md file in the 1-docusaurus-book directory as needed
- **FR-023**: System MUST support Bonus 1: Reusable Claude Code subagents/skills for RAG tasks
- **FR-024**: System MUST support Bonus 2: Signup/signin via Better Auth with user background questions
- **FR-025**: System MUST support Bonus 3: Personalized chapter content based on user background stored in Neon
- **FR-026**: System MUST support Bonus 4: Urdu translation per chapter: Users can access and navigate through all 4 core modules of the book within 30 seconds of landing on the site
- **FR-027**: System MUST deploy backend (FastAPI) separately from frontend (Docusaurus), using cloud platforms like Railway or Heroku that support Python/FastAPI
- **FR-028**: System MUST store credentials in .env file, exclude from version control, and use environment variables in production deployment
- **FR-029**: System MUST re-index book content during build process when content changes to ensure RAG accuracy
- **FR-030**: System MUST implement on-demand Urdu translation per chapter using Qwen's multilingual capabilities when user selects Urdu language option

### Key Entities

- **Book Content**: The educational material about Physical AI & Humanoid Robotics organized in modules and sections
- **Book Structure**: The hierarchical organization of content in 4 core modules with weekly breakdowns
- **User Interface**: The Docusaurus-based presentation layer that displays content to users
- **RAG Chatbot**: The Retrieval-Augmented Generation chatbot that answers user questions based on book content
- **Vector Database**: Qdrant-based storage for book content embeddings used by the RAG system
- **Embedding Engine**: Qwen-based service that converts text to vector representations for similarity search
- **Backend API**: FastAPI-based service that handles chatbot queries and RAG processing
- **Deployment Infrastructure**: Separate hosting for frontend (GitHub Pages) and backend (Railway/Heroku) with environment-based configuration
- **Security Layer**: Environment variable management and credential handling system for API keys and database connections
- **Translation Service**: On-demand multilingual translation using Qwen's capabilities for Urdu content
- **Content Indexing System**: Automated re-indexing mechanism that updates vector database when book content changes

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can access and navigate through all 4 core modules of the book within 30 seconds of landing on the site
- **SC-002**: The book successfully deploys to GitHub Pages with 99%+ uptime during the evaluation period
- **SC-003**: 90% of users can successfully navigate between different sections of the book without encountering broken links
- **SC-004**: The book content accurately reflects the 4 core modules with weekly breakdowns as specified in requirements
- **SC-005**: The repository includes clear README documentation with deployment instructions that allow setup within 10 minutes

Part 2 Measurable Outcomes

- **SC-006**: Chatbot responds to 90% of test queries accurately within 5 seconds, using book content only
- **SC-007**: Selected-text queries limit responses to provided context with 100% fidelity
- **SC-008**: Caching reduces API calls by 80% on repeated queries, preventing token exhaustion
- **SC-009**: Base score 100 for core RAG; up to 50 each for bonuses (total possible 300)
- **SC-010**: System deploys with separate backend (e.g., on Railway or similar hosting)