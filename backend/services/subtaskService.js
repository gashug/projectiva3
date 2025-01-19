import Subtask from '../models/Subtask.js';

class SubtaskService {
  static async getAllSubtasksByTaskId(taskId) {
    try {
      const subtasks = await Subtask.findAllByTaskId(taskId);
      return subtasks;
    } catch (error) {
      throw new Error('Failed to fetch subtasks.');
    }
  }

  static async getSubtaskById(id) {
    try {
      const subtask = await Subtask.findById(id);
      if (!subtask) {
        throw new Error('Subtask not found.');
      }
      return subtask;
    } catch (error) {
      throw new Error('Failed to fetch subtask.');
    }
  }

  static async createSubtask(subtaskData) {
    try {
      // Add any necessary business logic/validation here
      // ...

      const subtask = await Subtask.create(subtaskData);
      return subtask;
    } catch (error) {
      throw new Error('Failed to create subtask.');
    }
  }

  static async updateSubtask(id, subtaskData) {
    try {
      // Add any necessary business logic/validation here
      // ...

      const subtask = await Subtask.update(id, subtaskData);
      if (!subtask) {
        throw new Error('Subtask not found.');
      }
      return subtask;
    } catch (error) {
      throw new Error('Failed to update subtask.');
    }
  }

  static async deleteSubtask(id) {
    try {
      // Add any necessary business logic/validation here
      // ...

      const isDeleted = await Subtask.delete(id);
      if (!isDeleted) {
        throw new Error('Subtask not found.');
      }
      return true;
    } catch (error) {
      throw new Error('Failed to delete subtask.');
    }
  }
}

export default SubtaskService;