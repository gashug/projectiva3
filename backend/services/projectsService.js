import Project from '../models/Projects.js';

class ProjectService {
  static async getAllProjects() {
    try {
      const projects = await Project.findAll();
      return projects;
    } catch (error) {
      throw new Error('Failed to fetch projects.');
    }
  }

  static async getProjectById(id) {
    try {
      const project = await Project.findById(id);
      if (!project) {
        throw new Error('Project not found.');
      }
      return project;
    } catch (error) {
      throw new Error('Failed to fetch project.');
    }
  }

    static async getProjectsByClientId(clientId) {
        try {
        const projects = await Project.findByClientId(clientId);
        return projects;
        } catch (error) {
        throw new Error('Failed to fetch projects by client ID.');
        }
    }

  static async createProject(projectData) {
    try {
      // Add any necessary business logic/validation here
      // ...
      const project = await Project.create(projectData);
      return project;
    } catch (error) {
      throw new Error('Failed to create project.');
    }
  }

  static async updateProject(id, projectData) {
    try {
      // Add any necessary business logic/validation here
      // ...
      const project = await Project.update(id, projectData);
      if (!project) {
        throw new Error('Project not found.');
      }
      return project;
    } catch (error) {
      throw new Error('Failed to update project.');
    }
  }

  static async deleteProject(id) {
    try {
      // Add any necessary business logic/validation here
      // ...
      const isDeleted = await Project.delete(id);
      if (!isDeleted) {
        throw new Error('Project not found.');
      }
      return true;
    } catch (error) {
      throw new Error('Failed to delete project.');
    }
  }
}

export default ProjectService;