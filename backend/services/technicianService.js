import Technician from '../models/Technician.js';
import Task from '../models/Task.js';

class TechnicianService {
    static async getAllTechnicians() {
        try {
        const technicians = await Technician.findAll();
        return technicians;
        } catch (error) {
        throw new Error('Failed to fetch technicians.');
        }
    }
    
    static async getTechnicianById(id) {
        try {
        const technician = await Technician.findById(id);
        if (!technician) {
            throw new Error('Technician not found.');
        }
        return technician;
        } catch (error) {
        throw new Error('Failed to fetch technician.');
        }
    }
    
    static async createTechnician(technicianData) {
        try {
        // Add any necessary business logic/validation here
        // ...
        const technician = await Technician.create(technicianData);
        return technician;
        } catch (error) {
        throw new Error('Failed to create technician.');
        }
    }
    
    static async updateTechnician(id, technicianData) {
        try {
        // Add any necessary business logic/validation here
        // ...
        const technician = await Technician.update(id, technicianData);
        if (!technician) {
            throw new Error('Technician not found.');
        }
        return technician;
        } catch (error) {
        throw new Error('Failed to update technician.');
        }
    }
    
    static async deleteTechnician(id) {
        try {
        // Add any necessary business logic/validation here
        // ...
        const isDeleted = await Technician.delete(id);
        if (!isDeleted) {
            throw new Error('Technician not found.');
        }
        return true;
        } catch (error) {
        throw new Error('Failed to delete technician.');
        }
    }

    static async getTechnicianSummary() {
        try {
          const technicians = await Technician.findAll(); // Fetch all technicians
    
          const summary = await Promise.all(
            technicians.map(async (technician) => {
              const assignedTasks = await Task.findAll({ where: { assigned_to: technician.id } }); // Assuming you're storing assigned_to as technician ID
              const completedTasks = assignedTasks.filter(task => task.status === 'Completed').length;
    
              return {
                id: technician.id,
                name: technician.name,
                role: technician.role,
                availability: technician.availability,
                assignedTasksCount: assignedTasks.length,
                completedTasksCount: completedTasks,
                // Add other relevant metrics for each technician
              };
            })
          );
    
          return {
            totalTechnicians: technicians.length,
            availableTechnicians: technicians.filter(
              (tech) => tech.availability === "Available"
            ).length, // Example: Check for "Available" status
            assignedTechnicians: technicians.filter((tech) => tech.assignedTasksCount > 0).length,
            technicianDetails: summary,
          };
        } catch (error) {
          console.error('Error fetching technician summary:', error);
          throw new Error('Failed to fetch technician summary.');
        }
 }
}

 export default TechnicianService;
