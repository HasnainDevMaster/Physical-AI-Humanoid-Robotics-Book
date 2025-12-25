// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Overview'
    },
    {
      type: 'doc',
      id: 'course-overview',
      label: 'Course Overview'
    },
    {
      type: 'category',
      label: 'Module 1: ROS2 Fundamentals',
      items: [
        {
          type: 'doc',
          id: 'module-1/index',
          label: 'Module Introduction'
        },
        {
          type: 'doc',
          id: 'module-1/ros2-fundamentals',
          label: 'ROS2 Fundamentals'
        }
      ],
      link: {
        type: 'generated-index',
        description: 'Learn the fundamentals of Robot Operating System 2 (ROS2)',
      },
    },
    {
      type: 'category',
      label: 'Module 2: Simulation with Gazebo & Unity',
      items: [
        {
          type: 'doc',
          id: 'module-2/index',
          label: 'Module Introduction'
        },
        {
          type: 'doc',
          id: 'module-2/simulation-with-gazebo-unity',
          label: 'Simulation with Gazebo & Unity'
        }
      ],
      link: {
        type: 'generated-index',
        description: 'Learn simulation techniques for robotics using Gazebo and Unity',
      },
    },
    {
      type: 'category',
      label: 'Module 3: NVIDIA Isaac Platform',
      items: [
        {
          type: 'doc',
          id: 'module-3/index',
          label: 'Module Introduction'
        },
        {
          type: 'doc',
          id: 'module-3/nvidia-isaac-platform',
          label: 'NVIDIA Isaac Platform'
        }
      ],
      link: {
        type: 'generated-index',
        description: 'Learn about the NVIDIA Isaac platform for GPU-accelerated robotics',
      },
    },
    {
      type: 'category',
      label: 'Module 4: Humanoid Robot Development',
      items: [
        {
          type: 'doc',
          id: 'module-4/index',
          label: 'Module Introduction'
        },
        {
          type: 'doc',
          id: 'module-4/humanoid-robot-development',
          label: 'Humanoid Robot Development'
        },
        {
          type: 'doc',
          id: 'module-4/conversational-robotics',
          label: 'Conversational Robotics'
        },
        {
          type: 'doc',
          id: 'module-4/capstone-project',
          label: 'Capstone Project'
        }
      ],
      link: {
        type: 'generated-index',
        description: 'Learn the principles and techniques of humanoid robot development',
      },
    },
    {
      type: 'category',
      label: 'Additional Resources',
      items: [
        {
          type: 'doc',
          id: 'additional-pages/assessments',
          label: 'Assessments'
        },
        {
          type: 'doc',
          id: 'additional-pages/hardware-requirements',
          label: 'Hardware Requirements'
        }
      ]
    }
  ],
};

module.exports = sidebars;