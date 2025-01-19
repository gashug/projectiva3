import Tool from '../models/Tool.js';

class ToolService {
  static async getAllTools() {
    try {
      const tools = await Tool.findAll();
      return tools;
    } catch (error) {
      throw new Error('Failed to fetch tools.');
    }
  }

  static async getToolById(id) {
    try {
      const tool = await Tool.findById(id);
      if (!tool) {
        throw new Error('Tool not found.');
      }
      return tool;
    } catch (error) {
      throw new Error('Failed to fetch tool.');
    }
  }

  static async createTool(toolData) {
    try {
      // Add any necessary business logic/validation here
      // ...

      const tool = await Tool.create(toolData);
      return tool;
    } catch (error) {
      throw new Error('Failed to create tool.');
    }
  }

  static async updateTool(id, toolData) {
    try {
      // Add any necessary business logic/validation here
      // ...

      const tool = await Tool.update(id, toolData);
      if (!tool) {
        throw new Error('Tool not found.');
      }
      return tool;
    } catch (error) {
      throw new Error('Failed to update tool.');
    }
  }

  static async deleteTool(id) {
    try {
      // Add any necessary business logic/validation here
      // ...

      const isDeleted = await Tool.delete(id);
      if (!isDeleted) {
        throw new Error('Tool not found.');
      }
      return true;
    } catch (error) {
      throw new Error('Failed to delete tool.');
    }
  }
}

export default ToolService;