import Setting from '../models/Setting.js';

class SettingService {
  static async getAllSettings() {
    try {
      const settings = await Setting.findAll();
      return settings;
    } catch (error) {
      throw new Error('Failed to fetch settings.');
    }
  }

  static async getSettingById(id) {
    try {
      const setting = await Setting.findById(id);
      if (!setting) {
        throw new Error('Setting not found.');
      }
      return setting;
    } catch (error) {
      throw new Error('Failed to fetch setting.');
    }
  }

  static async getSettingByName(name) {
    try {
      const setting = await Setting.findByName(name);
      if (!setting) {
        throw new Error('Setting not found.');
      }
      return setting;
    } catch (error) {
      throw new Error('Failed to fetch setting.');
    }
  }

  static async createSetting(settingData) {
    try {
      // Add any necessary business logic/validation here
      // ...

      const setting = await Setting.create(settingData);
      return setting;
    } catch (error) {
      throw new Error('Failed to create setting.');
    }
  }

  static async updateSetting(id, settingData) {
    try {
      // Add any necessary business logic/validation here
      // ...

      const setting = await Setting.update(id, settingData);
      if (!setting) {
        throw new Error('Setting not found.');
      }
      return setting;
    } catch (error) {
      throw new Error('Failed to update setting.');
    }
  }

  static async deleteSetting(id) {
    try {
      // Add any necessary business logic/validation here
      // ...

      const isDeleted = await Setting.delete(id);
      if (!isDeleted) {
        throw new Error('Setting not found.');
      }
      return true;
    } catch (error) {
      throw new Error('Failed to delete setting.');
    }
  }

  static async resetSettingToDefault(id) {
    try {
      const setting = await Setting.resetToDefault(id);
      if (!setting) {
        throw new Error('Setting not found.');
      }
      return setting;
    } catch (error) {
      throw new Error('Failed to reset setting to default.');
    }
  }

  static async resetAllSettingsToDefault() {
    try {
      await Setting.resetAllToDefault();
      return true;
    } catch (error) {
      throw new Error('Failed to reset all settings to default.');
    }
  }
}

export default SettingService;