# Physical AI & Humanoid Robotics - Interactive Course Book

Welcome to the interactive course book for Physical AI & Humanoid Robotics. This comprehensive resource is designed for students, researchers, and professionals in AI and robotics who want to understand the fundamentals and advanced concepts of physical AI and humanoid robotics.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Course Structure](#course-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Overview

This course is structured around 4 core modules:
1. **Module 1: ROS2 Fundamentals** - Introduction to Robot Operating System 2
2. **Module 2: Simulation with Gazebo & Unity** - Simulating robotic environments
3. **Module 3: NVIDIA Isaac Platform** - Advanced robotics platform development
4. **Module 4: Humanoid Robot Development** - Building and programming humanoid robots

## Features

- Interactive course content with code examples
- Responsive design for multiple devices (desktop, tablet, mobile)
- Search functionality for easy navigation
- Interactive code blocks for hands-on learning
- Comprehensive coverage of physical AI and humanoid robotics concepts

## Installation

To run this course book locally, you need Node.js version 18 or higher.

1. Clone the repository:
   ```bash
   git clone https://github.com/HasnainDevMaster/Physical-AI-Humanoid-Robotics-Book.git
   cd Physical-AI-Humanoid-Robotics-Book
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The course book will be available at `http://localhost:3000`.

## Development

This project uses Docusaurus 3, a modern static website generator. Key scripts:

- `npm start` - Start the development server
- `npm build` - Build the static site
- `npm serve` - Serve the built site locally
- `npm deploy` - Deploy to GitHub Pages

## Deployment

### GitHub Pages Deployment

The course book is designed to be deployed to GitHub Pages. The configuration is already set up in `docusaurus.config.js`.

To deploy to GitHub Pages:

1. Make sure your GitHub Pages settings are configured to deploy from the `gh-pages` branch
2. Run the deploy command:
   ```bash
   npm run deploy
   ```

This command will:
- Build the site
- Push the built site to the `gh-pages` branch
- GitHub Pages will automatically serve the site

### Manual Deployment

If you prefer to deploy manually:

1. Build the site:
   ```bash
   npm run build
   ```

2. The built site will be in the `build/` directory, which can be deployed to any static hosting service.

## Course Structure

The course content is organized in the `docs/` directory:

```
docs/
├── index.md                    # Landing page
├── course-overview.md          # Course overview
├── module-1/                   # Module 1: ROS2 Fundamentals
│   ├── index.md               # Module 1 introduction
│   └── ros2-fundamentals.md   # ROS2 fundamentals content
├── module-2/                   # Module 2: Simulation with Gazebo & Unity
│   ├── index.md               # Module 2 introduction
│   └── simulation-with-gazebo-unity.md
├── module-3/                   # Module 3: NVIDIA Isaac Platform
│   ├── index.md               # Module 3 introduction
│   └── nvidia-isaac-platform.md
├── module-4/                   # Module 4: Humanoid Robot Development
│   ├── index.md               # Module 4 introduction
│   ├── humanoid-robot-development.md
│   ├── conversational-robotics.md
│   └── capstone-project.md
├── additional-pages/           # Additional resources
│   ├── weekly-breakdown-summary.md
│   ├── assessments.md
│   └── hardware-requirements.md
```

## Technologies Used

- **Docusaurus 3**: Static site generator with React
- **React**: UI library for interactive components
- **TypeScript**: Type-safe JavaScript
- **Node.js**: JavaScript runtime
- **npm**: Package manager
- **GitHub Pages**: Hosting platform

## Claude Code Integration

This project includes Claude Code agents and skills for AI-assisted development:

- **Agents** (in `.claude/agents/`):
  - ROS2Agent: ROS2-specific knowledge and code examples
  - SimulationAgent: Gazebo and Unity simulation expertise
  - IsaacAgent: NVIDIA Isaac platform knowledge
  - VLAAgent: Vision-Language-Action models for humanoid robotics

- **Skills** (in `.claude/skills/`):
  - MarkdownMasterSkill: Markdown formatting and structure
  - TableGeneratorSkill: Responsive table creation
  - SidebarBuilderSkill: Navigation configuration

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions about the course content, please open an issue in the GitHub repository.

---

*This interactive course book is designed to provide a comprehensive learning experience with hands-on examples and practical applications.*