import EquipmentService from '../services/equipmentService.js';

export const getAllEquipment = async (req, res) => {
  try {
    const equipment = await EquipmentService.getAllEquipment();
    res.status(200).json(equipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEquipmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const equipment = await EquipmentService.getEquipmentById(id);
    res.status(200).json(equipment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createEquipment = async (req, res) => {
  try {
    const equipmentData = req.body;
    const newEquipment = await EquipmentService.createEquipment(equipmentData);
    res.status(201).json(newEquipment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateEquipment = async (req, res) => {
  try {
    const { id } = req.params;
    const equipmentData = req.body;
    const updatedEquipment = await EquipmentService.updateEquipment(id, equipmentData);
    res.status(200).json(updatedEquipment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteEquipment = async (req, res) => {
  try {
    const { id } = req.params;
    await EquipmentService.deleteEquipment(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};