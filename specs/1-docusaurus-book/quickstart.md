# Quickstart: Docusaurus Book Development

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control
- Python 3.11+ (for backend preparation)

## Setup Instructions

### 1. Clone and Initialize Repository
```bash
git clone <repository-url>
cd <repository-name>
npm install
```

### 2. Install Docusaurus
```bash
npm init docusaurus@latest website classic
cd website
```

### 3. Configure TypeScript
```bash
# Install TypeScript dependencies
npm install --save-dev typescript @types/react @types/node
```

### 4. Create Claude Code Agents and Skills
```bash
# Create directory structure
mkdir -p .claude/agents .claude/skills

# Create agent files
touch .claude/agents/ROS2Agent.md
touch .claude/agents/SimulationAgent.md
touch .claude/agents/IsaacAgent.md
touch .claude/agents/VLAAgent.md

# Create skill directories
mkdir -p .claude/skills/MarkdownMasterSkill
mkdir -p .claude/skills/TableGeneratorSkill
mkdir -p .claude/skills/SidebarBuilderSkill
```

### 5. Start Development Server
```bash
npm run start
```

## Content Creation Workflow

### 1. Create Module Structure
```bash
# Create module directories in docs/
mkdir -p docs/module-1 docs/module-2 docs/module-3 docs/module-4
```

### 2. Add Content Files
```bash
# Add module index files
touch docs/module-1/index.md docs/module-1/ros2-fundamentals.md
touch docs/module-2/index.md docs/module-2/simulation-with-gazebo-unity.md
# ... continue for all modules
```

### 3. Use Claude Code Agents for Content Generation
```bash
# Example: Use ROS2Agent to help draft ROS2 content
# Claude Code will invoke the agent during content creation
```

### 4. Build and Test
```bash
# Build the site
npm run build

# Serve locally to test
npm run serve
```

## Deployment

### 1. Configure GitHub Pages
- Go to repository Settings
- Navigate to Pages section
- Select source as main branch, root folder

### 2. Update Docusaurus Config
```js
// docusaurus.config.js
module.exports = {
  // ... other config
  organizationName: 'your-username',
  projectName: 'your-repo-name',
  deploymentBranch: 'gh-pages',
};
```

### 3. Deploy
```bash
# Deploy to GitHub Pages
GIT_USER=<Your GitHub username> npm run deploy
```

## Quality Validation Checklist
- [ ] All 4 modules created with proper content
- [ ] Navigation structure matches requirements
- [ ] Claude Code agents and skills implemented
- [ ] TypeScript strict mode enabled for custom components
- [ ] Build completes without errors
- [ ] Site loads correctly on desktop and mobile
- [ ] All internal links functional
- [ ] Content accurately reflects course details