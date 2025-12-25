# Data Model: RAG Chatbot System

## Core Entities

### 1. BookContent
**Description:** The educational material about Physical AI & Humanoid Robotics organized in modules and sections
**Fields:**
- id: string (unique identifier)
- title: string (chapter/section title)
- content: string (markdown/text content)
- module: string (module identifier)
- section: string (section identifier)
- metadata: object (additional content metadata)
- createdAt: datetime
- updatedAt: datetime

**Relationships:**
- 1..* BookContent → 1 BookModule (belongs to a module)
- 1..* BookContent → 1 BookSection (belongs to a section)

### 2. BookModule
**Description:** The hierarchical organization of content in 4 core modules with weekly breakdowns
**Fields:**
- id: string (unique identifier)
- name: string (module name)
- description: string (module description)
- order: number (display order)
- createdAt: datetime
- updatedAt: datetime

**Relationships:**
- 1 BookModule → 1..* BookContent (contains multiple content items)

### 3. BookSection
**Description:** Sections within modules containing specific content
**Fields:**
- id: string (unique identifier)
- name: string (section name)
- moduleId: string (parent module ID)
- order: number (display order within module)
- createdAt: datetime
- updatedAt: datetime

**Relationships:**
- 1 BookSection → 1 BookModule (belongs to module)
- 1 BookSection → 1..* BookContent (contains multiple content items)

### 4. ChatSession
**Description:** Represents a user's chat session with the RAG chatbot
**Fields:**
- id: string (unique identifier)
- userId: string (user identifier, optional for anonymous users)
- startedAt: datetime
- lastActiveAt: datetime
- isActive: boolean

**Relationships:**
- 1 ChatSession → 1..* ChatMessage (contains multiple messages)
- 1 ChatSession → 0..1 User (optional user association)

### 5. ChatMessage
**Description:** Individual messages in a chat session
**Fields:**
- id: string (unique identifier)
- sessionId: string (session identifier)
- role: enum (user | assistant)
- content: string (message content)
- context: object (selected text or full context used)
- timestamp: datetime
- embeddingId: string (optional, reference to embedding vector)

**Relationships:**
- 1 ChatMessage → 1 ChatSession (belongs to session)

### 6. VectorEmbedding
**Description:** Embedding vectors for book content used in RAG system
**Fields:**
- id: string (unique identifier)
- contentId: string (reference to BookContent)
- vector: array<number> (embedding vector values)
- text: string (original text chunk)
- metadata: object (additional metadata for retrieval)
- createdAt: datetime

**Relationships:**
- 1 VectorEmbedding → 1 BookContent (references content)

### 7. User
**Description:** User information for bonus features (authentication, personalization)
**Fields:**
- id: string (unique identifier)
- email: string (user email)
- name: string (user name)
- background: string (user's technical background)
- preferences: object (user preferences including language settings)
- createdAt: datetime
- updatedAt: datetime

**Relationships:**
- 1 User → 0..* ChatSession (multiple sessions)
- 1 User → 0..* PersonalizedContent (personalized content)

### 8. PersonalizedContent
**Description:** Personalized content based on user background and preferences
**Fields:**
- id: string (unique identifier)
- userId: string (user identifier)
- contentId: string (original content identifier)
- personalizedText: string (personalized version of content)
- language: string (language code, e.g., 'en', 'ur')
- createdAt: datetime
- updatedAt: datetime

**Relationships:**
- 1 PersonalizedContent → 1 User (belongs to user)
- 1 PersonalizedContent → 1 BookContent (original content)

### 9. CacheEntry
**Description:** Cache entries for embeddings and responses to prevent token exhaustion
**Fields:**
- id: string (cache key)
- query: string (original query)
- response: string (cached response)
- embedding: array<number> (cached embedding vector, if applicable)
- createdAt: datetime
- expiresAt: datetime
- hitCount: number (number of times this entry was used)

## Validation Rules

### BookContent Validation
- title must not be empty
- content must not be empty
- module must reference a valid BookModule
- createdAt and updatedAt must be valid datetime values

### User Validation
- email must be a valid email format
- email must be unique
- background must be from predefined options (student, researcher, professional, etc.)

### ChatMessage Validation
- role must be either 'user' or 'assistant'
- content must not be empty
- timestamp must be valid datetime

### VectorEmbedding Validation
- vector must be an array of numbers
- contentId must reference a valid BookContent
- text must not be empty

## State Transitions

### ChatSession States
- Active: Session is currently in use
- Inactive: Session has timed out or ended
- Archived: Session has been archived after period of inactivity

### PersonalizedContent States
- Pending: Personalization is being generated
- Ready: Personalized content is available
- Expired: Personalized content needs regeneration