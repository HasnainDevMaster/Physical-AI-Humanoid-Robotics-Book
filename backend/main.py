from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
import uvicorn

app = FastAPI(
    title="Physical AI & Humanoid Robotics API",
    description="Backend API for the Physical AI & Humanoid Robotics course book",
    version="1.0.0"
)

class CourseModule(BaseModel):
    id: int
    name: str
    description: str
    content: str
    module: str
    week: Optional[str] = None
    order: int
    type: str

@app.get("/")
def read_root():
    return {"message": "Welcome to the Physical AI & Humanoid Robotics API"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

@app.get("/modules")
def get_modules():
    """Get all course modules"""
    # This would typically fetch from a database
    # For now, we'll return a simple response
    return {"modules": ["Module 1: ROS2 Fundamentals", "Module 2: Simulation with Gazebo & Unity",
                        "Module 3: NVIDIA Isaac Platform", "Module 4: Humanoid Robot Development"]}

@app.get("/modules/{module_id}")
def get_module(module_id: int):
    """Get a specific course module by ID"""
    # This would typically fetch from a database
    # For now, we'll return a simple response
    modules = {
        1: {"id": 1, "name": "Module 1: ROS2 Fundamentals", "description": "Introduction to Robot Operating System 2"},
        2: {"id": 2, "name": "Module 2: Simulation with Gazebo & Unity", "description": "Simulation techniques for robotics"},
        3: {"id": 3, "name": "Module 3: NVIDIA Isaac Platform", "description": "GPU-accelerated robotics platform"},
        4: {"id": 4, "name": "Module 4: Humanoid Robot Development", "description": "Development of humanoid robots"}
    }

    if module_id in modules:
        return modules[module_id]
    else:
        return {"error": "Module not found"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)