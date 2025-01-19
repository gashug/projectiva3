import SettingService from '../services/settingsService.js';

export const getAllSettings = async (req, res) => {
  try {
    const settings = await SettingService.getAllSettings();
    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSettingById = async (req, res) => {
  try {
    const { id } = req.params;
    const setting = await SettingService.getSettingById(id);
    res.status(200).json(setting);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSettingByName = async (req, res) => {
  try {
    const { name } = req.params;
    const setting = await SettingService.getSettingByName(name);
    res.status(200).json(setting);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSetting = async (req, res) => {
  try {
    const settingData = req.body;
    const newSetting = await SettingService.createSetting(settingData);
    res.status(201).json(newSetting);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateSetting = async (req, res) => {
  try {
    const { id } = req.params;
    const settingData = req.body;
    const updatedSetting = await SettingService.updateSetting(id, settingData);
    res.status(200).json(updatedSetting);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteSetting = async (req, res) => {
  try {
    const { id } = req.params;
    await SettingService.deleteSetting(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const resetSettingToDefault = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSetting = await SettingService.resetSettingToDefault(id);
    res.status(200).json(updatedSetting);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const resetAllSettingsToDefault = async (req, res) => {
  try {
    await SettingService.resetAllSettingsToDefault();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};