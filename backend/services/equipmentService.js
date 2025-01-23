import Equipment from '../models/Equipment.js';

class EquipmentService {
  static async getAllEquipment() {
    try {
      const equipment = await Equipment.findAll();
      return equipment;
    } catch (error) {
      throw new Error('Failed to fetch equipment.');
    }
  }

  static async getEquipmentById(id) {
    try {
      const equipment = await Equipment.findById(id);
      if (!equipment) {
        throw new Error('Equipment not found.');
      }
      return equipment;
    } catch (error) {
      throw new Error('Failed to fetch equipment.');
    }
  }

  static async createEquipment(equipmentData) {
    try {
      // Add any necessary business logic/validation here
      // ...

      const equipment = await Equipment.create(equipmentData);
      return equipment;
    } catch (error) {
      throw new Error('Failed to create equipment.');
    }
  }

  static async updateEquipment(id, equipmentData) {
    try {
      // Add any necessary business logic/validation here
      // ...

      const equipment = await Equipment.update(id, equipmentData);
      if (!equipment) {
        throw new Error('Equipment not found.');
      }
      return equipment;
    } catch (error) {
      throw new Error('Failed to update equipment.');
    }
  }

  static async deleteEquipment(id) {
    try {
      // Add any necessary business logic/validation here
      // ...

      const isDeleted = await Equipment.delete(id);
      if (!isDeleted) {
        throw new Error('Equipment not found.');
      }
      return true;
    } catch (error) {
      throw new Error('Failed to delete equipment.');
    }
  }

  static async getEquipmentSummary() {
    try {
      const allEquipment = await Equipment.findAll();

      return {
        totalEquipment: allEquipment.length,
        availableEquipment: allEquipment.filter((eq) => eq.assigned_to_project === null).length, // Example: Check if not assigned
        assignedEquipment: allEquipment.filter((eq) => eq.assigned_to_project !== null).length,
        lowStockItems: allEquipment.filter((eq) => eq.quantity < 5).length, // Example threshold
        equipmentDetails: allEquipment, // You might want to refine this to include only necessary data
      };
    } catch (error) {
      console.error('Error fetching equipment summary:', error);
      throw new Error('Failed to fetch equipment summary.');
    }
  }
}

export default EquipmentService;