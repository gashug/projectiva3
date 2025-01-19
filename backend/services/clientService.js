import Client from '../models/clientModel';

class ClientService {
    // Method to get all clients
    static async getAllClients() {
        try {
        const clients = await Client.findAll();
        return clients;
        } catch (error) {
        throw new Error('Failed to fetch clients.');
        }
    }
    
    // Method to get a client by ID
    static async getClientById(id) {
        try {
        const client = await Client.findById(id);
        if (!client) {
            throw new Error('Client not found.');
        }
        return client;
        } catch (error) {
        throw new Error('Failed to fetch client.');
        }
    }
    
    // Method to create a client
    static async createClient(clientData) {
        try {
        // Add any necessary business logic/validation here
        // ...
        const client = await Client.create(clientData);
        return client;
        } catch (error) {
        throw new Error('Failed to create client.');
        }
    }
    
    // Method to update a client
    static async updateClient(id, clientData) {
        try {
        // Add any necessary business logic/validation here
        // ...
        const client = await Client.update(id, clientData);
        if (!client) {
            throw new Error('Client not found.');
        }
        return client;
        } catch (error) {
        throw new Error('Failed to update client.');
        }
    }
    
    // Method to delete a client
    static async deleteClient(id) {
        try {
        // Add any necessary business logic/validation here
        // ...
        const isDeleted = await Client.delete(id);
        if (!isDeleted) {
            throw new Error('Client not found.');
        }
        return true
        } catch (error) {
        throw new Error('Failed to delete client.');
        }
    }
}

export default ClientService; // Export the ClientService class