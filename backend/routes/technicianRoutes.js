import express from 'express';
import {
    getAllTechnicians,
    getTechnicianById,
    createTechnician,
    updateTechnician,
    deleteTechnician,
} from '../controllers/technicianController.js';

const router = express.Router();

router.get('/', getAllTechnicians);
router.get('/:id', getTechnicianById);
router.post('/', createTechnician);
router.put('/:id', updateTechnician);
router.delete('/:id', deleteTechnician);

export default router;