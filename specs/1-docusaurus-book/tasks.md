---
description: "Task list template for feature implementation"
---

# Tasks: Interactive Docusaurus Book for Physical AI & Humanoid Robotics

**Input**: Design documents from `/specs/1-docusaurus-book/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create project structure per implementation plan
- [ ] T002 [P] Initialize Docusaurus project with latest stable version
- [ ] T003 [P] Configure TypeScript with strict mode for all custom components
- [ ] T004 [P] Create .claude/agents directory structure
- [ ] T005 [P] Create .claude/skills directory structure
- [ ] T006 Initialize package.json with required dependencies
- [ ] T007 Configure docusaurus.config.js with proper settings

---
## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

Examples of foundational tasks (adjust based on your project):

- [ ] T008 Create module directory structure in docs/
- [ ] T009 [P] Create basic page structure (index.md, course-overview.md)
- [ ] T010 [P] Create module-1/, module-2/, module-3/, module-4/ directories
- [ ] T011 [P] Create additional-pages/ directory with assessments.md and hardware-requirements.md
- [ ] T012 Create backend skeleton with FastAPI structure (main.py, requirements.txt)
- [ ] T013 [P] Create initial Claude Code agents (ROS2Agent.md, SimulationAgent.md, IsaacAgent.md, VLAAgent.md)
- [ ] T014 [P] Create Claude Code skills directories (MarkdownMasterSkill/, TableGeneratorSkill/, SidebarBuilderSkill/)
- [ ] T015 Configure responsive design and mobile compatibility

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---
## Phase 3: User Story 1 - Access Interactive Book Content (Priority: P1) 🎯 MVP

**Goal**: Students, researchers, and professionals in AI and robotics access the interactive Docusaurus book to learn about Physical AI & Humanoid Robotics. They can navigate through 4 core modules with organized chapters and sections reflecting weekly breakdowns.

**Independent Test**: Users can successfully navigate to the deployed book site, access the first module, and read the content. The book provides a good learning experience with proper navigation.

### Tests for User Story 1 (OPTIONAL - only if tests requested) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T016 [P] [US1] Manual test for navigation from landing page to all 4 core modules
- [ ] T017 [P] [US1] Manual test for navigation between sections within modules

### Implementation for User Story 1

- [ ] T018 [P] [US1] Create landing page content at docs/index.md
- [ ] T019 [P] [US1] Create course overview content at docs/course-overview.md
- [ ] T020 [P] [US1] Create Module 1 content (index.md and ros2-fundamentals.md) in docs/module-1/
- [ ] T021 [P] [US1] Create Module 2 content (index.md and simulation-with-gazebo-unity.md) in docs/module-2/
- [ ] T022 [P] [US1] Create Module 3 content (index.md and nvidia-isaac-platform.md) in docs/module-3/
- [ ] T023 [P] [US1] Create Module 4 content (index.md and humanoid-robot-development.md) in docs/module-4/
- [ ] T024 [US1] Configure sidebar navigation to reflect 4-module structure
- [ ] T025 [US1] Implement table of contents linking all modules and sections
- [ ] T026 [US1] Add weekly breakdowns to content following specified mapping (Weeks 1-2 as intro module, etc.)

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---
## Phase 4: User Story 2 - Experience Interactive Content (Priority: P2)

**Goal**: Users interact with the book content through interactive elements, code samples, and examples that enhance their understanding of Physical AI and humanoid robotics concepts.

**Independent Test**: Users can interact with code samples, diagrams, and other interactive elements within the book and see them function properly.

### Tests for User Story 2 (OPTIONAL - only if tests requested) ⚠️

- [ ] T027 [P] [US2] Manual test for interactive code sample display
- [ ] T028 [P] [US2] Manual test for responsive interactive elements

### Implementation for User Story 2

- [ ] T029 [P] [US2] Create InteractiveCodeBlock component in src/components/
- [ ] T030 [P] [US2] Implement search functionality for the book
- [ ] T031 [US2] Add interactive code samples to Module 1 content
- [ ] T032 [US2] Add interactive code samples to Module 2 content
- [ ] T033 [US2] Add interactive code samples to Module 3 content
- [ ] T034 [US2] Add interactive code samples to Module 4 content
- [ ] T035 [US2] Implement proper code block rendering with syntax highlighting
- [ ] T036 [US2] Add diagrams and visual elements to enhance content

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---
## Phase 5: User Story 3 - Access Book on Multiple Devices (Priority: P3)

**Goal**: Users access the book content from various devices (desktop, tablet, mobile) with responsive design that adapts to different screen sizes.

**Independent Test**: The book displays properly and remains functional across different device types and screen sizes.

### Tests for User Story 3 (OPTIONAL - only if tests requested) ⚠️

- [ ] T037 [P] [US3] Manual test for mobile device responsiveness
- [ ] T038 [P] [US3] Manual test for tablet device responsiveness

### Implementation for User Story 3

- [ ] T039 [P] [US3] Optimize sidebar navigation for mobile devices
- [ ] T040 [P] [US3] Ensure code samples are responsive on small screens
- [ ] T041 [US3] Test and adjust layout for various screen sizes
- [ ] T042 [US3] Optimize images and diagrams for different devices
- [ ] T043 [US3] Implement mobile-friendly navigation menu

**Checkpoint**: All user stories should now be independently functional

---
## Phase 6: Additional Content and Features

**Goal**: Complete all additional pages and features as specified in the requirements

- [ ] T044 [P] Create additional content pages (weekly-breakdown-summary.md, assessments.md, hardware-requirements.md)
- [ ] T045 [P] Add conversational-robotics.md and capstone-project.md to Module 4
- [ ] T046 Implement Context7 MCP server integration for build-time documentation fetching
- [ ] T047 [P] Create MarkdownMasterSkill with proper formatting guidelines
- [ ] T048 [P] Create TableGeneratorSkill for responsive Markdown tables
- [ ] T049 [P] Create SidebarBuilderSkill for navigation configuration
- [ ] T050 Implement proper content validation to ensure no additions beyond provided course details
- [ ] T051 Add accessibility features for users with different needs

---
## Phase 7: Quality Assurance and Deployment

**Goal**: Ensure all functionality works properly and prepare for GitHub Pages deployment

- [ ] T052 [P] Update README with deployment instructions that allow setup within 10 minutes
- [ ] T053 Run full site build to verify no errors
- [ ] T054 Test all internal links for broken references
- [ ] T055 Verify content accurately reflects 4 core modules with weekly breakdowns
- [ ] T056 [P] Configure GitHub Pages deployment settings
- [ ] T057 Deploy to GitHub Pages and verify functionality
- [ ] T058 Run quality validation checklist from quickstart.md

---
## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T059 [P] Documentation updates in docs/
- [ ] T060 Code cleanup and refactoring
- [ ] T061 Performance optimization across all stories
- [ ] T062 [P] Additional manual tests (if requested)
- [ ] T063 Security hardening
- [ ] T064 Run quickstart.md validation

---
## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---
## Parallel Example: User Story 1

```bash
# Launch all content creation for User Story 1 together:
Task: "Create landing page content at docs/index.md"
Task: "Create course overview content at docs/course-overview.md"
Task: "Create Module 1 content (index.md and ros2-fundamentals.md) in docs/module-1/"
Task: "Create Module 2 content (index.md and simulation-with-gazebo-unity.md) in docs/module-2/"
```

---
## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---
## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence

---

# Part 2: RAG Chatbot System Implementation Tasks

## Phase 3: User Story 4 - Query Book Content via RAG Chatbot (Priority: P1) 🎯 MVP

**Goal**: Users ask questions about the book's content through an embedded chatbot, receiving accurate, context-aware responses based on the full book or selected text.

**Independent Test**: Users input queries in the chatbot UI and receive relevant responses drawn from book content.

### Tests for User Story 4 (OPTIONAL - only if tests requested) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T065 [P] [US4] Manual test for basic chatbot query functionality
- [ ] T066 [P] [US4] Manual test for selected-text context query functionality

### Implementation for User Story 4

- [ ] T067 [P] [US4] Create backend directory structure in `backend/` with app, api, models, schemas, database, and utils subdirectories
- [ ] T068 [P] [US4] Set up Python virtual environment and install dependencies (FastAPI, uvicorn, python-dotenv, langchain-community, qdrant-client, openai, diskcache)
- [ ] T069 [US4] Create requirements.txt with all backend dependencies
- [ ] T070 [US4] Set up FastAPI application structure with main.py entry point
- [ ] T071 [P] [US4] Create API routes structure (chat.py, content.py, user.py) in `backend/app/api/`
- [ ] T072 [P] [US4] Implement environment variable loading with python-dotenv
- [ ] T073 [P] [US4] Create data models for entities (BookContent, ChatSession, ChatMessage, etc.) in `backend/app/models/`
- [ ] T074 [P] [US4] Create Pydantic schemas for API requests/responses in `backend/app/schemas/`
- [ ] T075 [US4] Create Claude Code agent files (EmbeddingAgent.md, RetrieverAgent.md, ChatbotAgent.md) in `.claude/agents/`
- [ ] T076 [P] [US4] Create Claude Code skill directories (CachingSkill, SelectedTextSkill, UrduTranslationSkill) in `.claude/skills/`
- [ ] T077 [US4] Implement Qwen text-embedding-v4 integration with DashScope API
- [ ] T078 [US4] Create content chunking functionality using RecursiveCharacterTextSplitter
- [ ] T079 [US4] Create index_content.py script for content indexing in `backend/`
- [ ] T080 [P] [US4] Implement content indexing script to extract from Docusaurus docs and store in Qdrant
- [ ] T081 [US4] [P] Create chat query endpoint with RAG logic in `backend/app/api/chat.py`
- [ ] T082 [US4] [P] Implement vector retrieval from Qdrant with metadata filtering
- [ ] T083 [US4] [P] Add citation mechanism to return source information with responses
- [ ] T084 [US4] [P] Implement caching layer for embeddings and responses
- [ ] T085 [US4] [P] Add error handling and graceful fallback for external services
- [ ] T086 [US4] [P] Create selected-text context injection functionality
- [ ] T087 [US4] [P] Implement response validation to ensure content fidelity
- [ ] T088 [US4] [P] Add performance monitoring for response times
- [ ] T089 [US4] Create floating chatbot UI component in `src/components/Chatbot/Chatbot.tsx`
- [ ] T090 [US4] [P] Implement chat interface with message history in Chatbot component
- [ ] T091 [US4] [P] Add global text selection listener for context capture
- [ ] T092 [US4] [P] Create API client to communicate with backend endpoints
- [ ] T093 [US4] [P] Implement loading states and error handling in UI
- [ ] T094 [US4] [P] Style chatbot widget with CSS in Chatbot.module.css
- [ ] T095 [US4] Update docusaurus.config.js to include backend API URL configuration
- [ ] T096 [US4] Test end-to-end RAG flow with sample queries
- [ ] T097 [US4] Validate selected-text queries limit responses to provided context

## Phase 4: User Story 5 - Experience Bonus Features (Priority: P2)

**Goal**: Users benefit from optional bonuses: Authentication for personalized experiences, content personalization based on background, and Urdu translation.

**Independent Test**: If implemented, users can sign up, see personalized content, and toggle Urdu translation.

### Tests for User Story 5 (OPTIONAL - only if tests requested) ⚠️

- [ ] T098 [P] [US5] Manual test for user authentication flow
- [ ] T099 [P] [US5] Manual test for content personalization functionality

### Implementation for User Story 5

- [ ] T100 [US5] Implement Better Auth integration for user signup/signin
- [ ] T101 [US5] [P] Create user profile management endpoints in `backend/app/api/user.py`
- [ ] T102 [US5] [P] Implement user data storage in Neon Postgres
- [ ] T103 [US5] [P] Create user background collection during signup
- [ ] T104 [US5] [P] Implement content personalization based on user background
- [ ] T105 [US5] [P] Create personalized content storage model
- [ ] T106 [US5] [P] Implement on-demand Urdu translation using Qwen capabilities
- [ ] T107 [US5] [P] Add language preference management in user profiles
- [ ] T108 [US5] [P] Create content translation API endpoint
- [ ] T109 [US5] [P] Update frontend to support language switching
- [ ] T110 [US5] Test bonus feature integration with core RAG functionality

## Phase 5: Deployment & Polish

**Goal**: Deploy the RAG system with proper configuration and finalize the implementation

- [ ] T111 [P] Create deployment configuration for Railway backend
- [ ] T112 [P] Update GitHub Pages deployment for frontend with backend URL
- [ ] T113 [P] Add comprehensive API documentation
- [ ] T114 [P] Create README updates with RAG system setup instructions
- [ ] T115 [P] Perform end-to-end testing of all RAG features
- [ ] T116 [P] Optimize performance and fix any bottlenecks
- [ ] T117 [P] Update spec.md with final RAG implementation details
- [ ] T118 [P] Clean up unused code and documentation
- [ ] T119 [P] Final quality assurance and bug fixes for RAG system

## Success Criteria Validation for RAG System

- [ ] SC-006: Chatbot responds to 90% of test queries accurately within 5 seconds
- [ ] SC-007: Selected-text queries limit responses to provided context with 100% fidelity
- [ ] SC-008: Caching reduces API calls by 80% on repeated queries
- [ ] SC-010: System deploys with separate backend (e.g., on Railway)