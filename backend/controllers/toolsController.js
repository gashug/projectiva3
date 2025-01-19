import ToolService from '../services/toolsService.js';

export const getAllTools = async (req, res) => {
  try {
    const tools = await ToolService.getAllTools();
    res.status(200).json(tools);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getToolById = async (req, res) => {
  try {
    const { id } = req.params;
    const tool = await ToolService.getToolById(id);
    res.status(200).json(tool);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTool = async (req, res) => {
  try {
    const toolData = req.body;
    const newTool = await ToolService.createTool(toolData);
    res.status(201).json(newTool);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTool = async (req, res) => {
  try {
    const { id } = req.params;
    const toolData = req.body;
    const updatedTool = await ToolService.updateTool(id, toolData);
    res.status(200).json(updatedTool);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteTool = async (req, res) => {
  try {
    const { id } = req.params;
    await ToolService.deleteTool(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};