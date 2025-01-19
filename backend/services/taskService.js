import Task from '../models/Task.js';

class TaskService {
    static async getAllTasks() {
        try {
        const tasks = await Task.findAll();
        return tasks;
        } catch (error) {
        throw new Error('Failed to fetch tasks.');
        }
    }
    
    static async getTaskById(id) {
        try {
        const task = await Task.findById(id);
        if (!task) {
            throw new Error('Task not found.');
        }
        return task;
        } catch (error) {
        throw new Error('Failed to fetch task.');
        }
    }
    
    static async getTasksByProjectId(projectId) {
        try {
        const tasks = await Task.findByProjectId(projectId);
        return tasks;
        } catch (error) {
        throw new Error('Failed to fetch tasks by project ID.');
        }
    }
    
    static async createTask(taskData) {
        try {
        // Add any necessary business logic/validation here
        // ...
        const task = await Task.create(taskData);
        return task;
        } catch (error) {
        throw new Error('Failed to create task.');
        }
    }
    
    static async updateTask(id, taskData) {
        try {
        // Add any necessary business logic/validation here
        // ...
        const task = await Task.update(id, taskData);
        if (!task) {
            throw new Error('Task not found.');
        }
        return task;
        } catch (error) {
        throw new Error('Failed to update task.');
        }
    }
    
    static async deleteTask(id) {
        try {
          // Add any necessary business logic/validation here
          // ...
    
          const isDeleted = await Task.delete(id);
          if (!isDeleted) {
            throw new Error('Task not found.');
          }
          return true;
        } catch (error) {
          throw new Error('Failed to delete task.');
        }
      }
}

export default TaskService;