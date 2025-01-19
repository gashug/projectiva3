import express from 'express';
import {
  getAllSettings,
  getSettingById,
  getSettingByName,
  createSetting,
  updateSetting,
  deleteSetting,
  resetSettingToDefault,
  resetAllSettingsToDefault,
} from '../controllers/settingsController.js';

const router = express.Router();

router.get('/', getAllSettings);
router.get('/:id', getSettingById);
router.get('/name/:name', getSettingByName);
router.post('/', createSetting);
router.put('/:id', updateSetting);
router.delete('/:id', deleteSetting);
router.patch('/:id/reset', resetSettingToDefault);
router.patch('/reset', resetAllSettingsToDefault);

export default router;