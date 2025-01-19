import ClientService from '../services/clientService.js';

export const getAllClients = async (req, res) => {
  try {
    const clients = await ClientService.getAllClients();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await ClientService.getClientById(id);
    res.status(200).json(client);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createClient = async (req, res) => {
  try {
    const clientData = req.body;
    const newClient = await ClientService.createClient(clientData);
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const clientData = req.body;
    const updatedClient = await ClientService.updateClient(id, clientData);
    res.status(200).json(updatedClient);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    await ClientService.deleteClient(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};