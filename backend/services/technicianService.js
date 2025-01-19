import Technician from '../models/Technician.js';

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
 }

 export default TechnicianService;
