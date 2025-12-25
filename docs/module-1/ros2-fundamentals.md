---
sidebar_position: 4
---

# ROS2 Fundamentals

## Introduction to Robot Operating System 2

Robot Operating System 2 (ROS2) is a flexible framework for writing robot software. It's a collection of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robot behavior across a wide variety of robot platforms.

Unlike traditional operating systems, ROS2 is not an actual OS but rather a middleware that provides services designed for a heterogeneous computer cluster. It includes hardware abstraction, device drivers, libraries, visualizers, message-passing, package management, and more.

## Key Concepts

### Nodes
A node is an executable that uses ROS2 to communicate with other nodes. Nodes are designed to be used as small modules with a specific purpose. In ROS2, nodes are implemented as objects that are part of a client library such as rclcpp (C++) or rclpy (Python).

### Topics and Messages
Topics are named buses over which nodes exchange messages. Messages are the data format exchanged between nodes subscribed to a topic. The topic name is a unique identifier for the bus, and multiple nodes can publish or subscribe to the same topic.

### Services
Services provide a request/response mechanism for communication between nodes. A service client sends a request to a service server, which processes the request and sends back a response.

### Actions
Actions are a more advanced form of communication that allows for long-running tasks with feedback. They're ideal for tasks that might take a long time to complete and require continuous feedback.

## Architecture

ROS2 uses a DDS (Data Distribution Service) implementation for its communication layer. This provides a more robust and reliable communication system compared to ROS1's custom implementation.

### Client Libraries
- **rclcpp**: C++ client library
- **rclpy**: Python client library
- **rclnodejs**: Node.js client library
- **rclc**: C client library (for microcontrollers)

### Launch System
ROS2 includes a powerful launch system that allows you to start multiple nodes at once, set parameters, and manage the lifecycle of your system.

## Practical Example

Here's a simple example of a ROS2 publisher in Python:

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello World: %d' % self.i
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Best Practices

1. **Use meaningful names**: Choose descriptive names for your nodes, topics, and services
2. **Parameterize your nodes**: Use ROS2 parameters to make your nodes configurable
3. **Handle errors gracefully**: Implement proper error handling in your nodes
4. **Use composition when appropriate**: Consider using composable nodes for better performance
5. **Follow naming conventions**: Use consistent naming across your packages

## Summary

ROS2 provides a powerful framework for developing robotic applications. Its architecture based on DDS provides improved reliability and real-time capabilities. Understanding these fundamental concepts is crucial for developing more complex robotic systems in subsequent modules.