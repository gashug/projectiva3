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
}

export default EquipmentService;