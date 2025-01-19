import TechnicianService from '../services/technicianService.js';

export const getAllTechnicians = async (req, res) => {
  try {
    const technicians = await TechnicianService.getAllTechnicians();
    res.status(200).json(technicians);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTechnicianById = async (req, res) => {
  try {
    const { id } = req.params;
    const technician = await TechnicianService.getTechnicianById(id);
    res.status(200).json(technician);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTechnician = async (req, res) => {
  try {
    const technicianData = req.body;
    const newTechnician = await TechnicianService.createTechnician(technicianData);
    res.status(201).json(newTechnician);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTechnician = async (req, res) => {
  try {
    const { id } = req.params;
    const technicianData = req.body;
    const updatedTechnician = await TechnicianService.updateTechnician(id, technicianData);
    res.status(200).json(updatedTechnician);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteTechnician = async (req, res) => {
  try {
    const { id } = req.params;
    await TechnicianService.deleteTechnician(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};