import TaskService from '../services/taskService.js';

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskService.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskService.getTaskById(id);
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTasksByProjectId = async (req, res) => {
  try {
    const { projectId } = req.params;
    const tasks = await TaskService.getTasksByProjectId(projectId);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const taskData = req.body;
    const newTask = await TaskService.createTask(taskData);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskData = req.body;
    const updatedTask = await TaskService.updateTask(id, taskData);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await TaskService.deleteTask(id);
    res.status(204).send(); // No content
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};