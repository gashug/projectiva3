// Initialize express router
import ProjectService from '../services/projectService';

// Get all projects
export const getAllProjects = async (req, res) => {
    try {
        const projects = await ProjectService.getAllProjects();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get project by id
export const getProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await ProjectService.getProjectById(id);
        res.status(200).json(project);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Get project by client id
export const getProjectByClientId = async (req, res) => {
    try {
        const { clientid } = req.params;
        const projects = await ProjectService.getProjectByClientId(clientid);
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new project
export const createProject = async (req, res) => {
    try {
        const projectData = req.body;
        const newProject = await ProjectService.createProject(projectData);
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a project
export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const projectData = req.body;
        const updatedProject = await ProjectService.updateProject(id, projectData);
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Delete a project
export const deleteProject = async (req, res) => {
    try {
      const { id } = req.params;
      await ProjectService.deleteProject(id);
      res.status(204).send(); // No content to send back
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };