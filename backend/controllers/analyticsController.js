// ... other analytics controller methods (getTaskAnalytics, getTechnicianAnalytics, getInventoryAnalytics)

import AnalyticsService from '../services/analyticsService.js';

export const getDashboardAnalytics = async (req, res) => {
  try {
    const data = await AnalyticsService.getDashboardData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjectAnalytics = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await AnalyticsService.getProjectData(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTaskAnalytics = async (req, res) => {
  try {
    // Get filter parameters from the request query
    const filter = req.query;

    const data = await AnalyticsService.getTaskData(filter);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTechnicianAnalytics = async (req, res) => {
  try {
    const data = await AnalyticsService.getTechnicianData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getInventoryAnalytics = async (req, res) => {
  try {
    const data = await AnalyticsService.getInventoryData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};