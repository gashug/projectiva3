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

  static async getToolSummary() {
    try {
      const allTools = await Tool.findAll();

      return {
        totalTools: allTools.length,
        availableTools: allTools.filter((tool) => tool.assigned_to_project === null && tool.assigned_to_technician === null).length, // Example: Check if not assigned
        assignedTools: allTools.filter((tool) => tool.assigned_to_project !== null || tool.assigned_to_technician !== null).length,
        toolsNeedingRepair: allTools.filter((tool) => tool.condition === "Needs Repair").length, // Example condition
        toolDetails: allTools, // You might want to refine this to include only necessary data
      };
    } catch (error) {
      console.error('Error fetching tool summary:', error);
      throw new Error('Failed to fetch tool summary.');
    }
  }

}

export default ToolService;