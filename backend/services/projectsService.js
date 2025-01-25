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
      console.error('Error creating project in service:', error);
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
      console.error("Error updating project in service:", error); // Add this line
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

  // Method to update project stages
  static async updateProjectStages(projectId, stages) {
    try {
      const project = await Project.findById(projectId);
      if (!project) {
        throw new Error("Project not found.");
      }

      // Validate stages data
      if (!Array.isArray(stages)) {
        throw new Error("Stages must be an array.");
      }

      // Update the stages (you might need to adjust this logic)
      project.stages = stages;

      const updatedProject = await Project.update(projectId, project);
      console.log("Updated project stages:", updatedProject.stages); // Log updated stages
      return updatedProject;
    } catch (error) {
      console.error("Error updating project stages:", error);
      throw new Error("Failed to update project stages.");
    }
  }

  // Method to get project stages
  static async getProjectStages(projectId) {
    try {
      const project = await Project.findById(projectId);
      if (!project) {
        throw new Error("Project not found.");
      }

      console.log("Fetched stages for project:", project.stages); // Log fetched stages
      return project.stages || []; // Return stages or an empty array if not set
    } catch (error) {
      console.error("Error fetching project stages:", error);
      throw new Error("Failed to fetch project stages.");
    }
  }
}

export default ProjectService;