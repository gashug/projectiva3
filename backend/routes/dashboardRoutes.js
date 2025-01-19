import express from 'express';
import { getDashboardData } from '../controllers/dashboardController.js';
// import { auth } from '@clerk/clerk-sdk-node'; // Import Clerk's authentication middleware

const router = express.Router();

// Protect this route with Clerk's authentication middleware
router.get('/', getDashboardData);

export default router;