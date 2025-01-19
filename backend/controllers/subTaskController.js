import SubtaskService from '../services/subtaskService.js';

export const getAllSubtasksByTaskId = async (req, res) => {
  try {
    const { taskId } = req.params;
    const subtasks = await SubtaskService.getAllSubtasksByTaskId(taskId);
    res.status(200).json(subtasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSubtaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const subtask = await SubtaskService.getSubtaskById(id);
    res.status(200).json(subtask);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSubtask = async (req, res) => {
  try {
    const subtaskData = req.body;
    const newSubtask = await SubtaskService.createSubtask(subtaskData);
    res.status(201).json(newSubtask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateSubtask = async (req, res) => {
  try {
    const { id } = req.params;
    const subtaskData = req.body;
    const updatedSubtask = await SubtaskService.updateSubtask(id, subtaskData);
    res.status(200).json(updatedSubtask);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteSubtask = async (req, res) => {
  try {
    const { id } = req.params;
    await SubtaskService.deleteSubtask(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};