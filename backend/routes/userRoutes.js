import express from 'express';
import {
    getUserByClerkId,getUserById
} from '../controllers/userController.js';

const router = express.Router();

// Define the route to get a user by their Clerk User ID
router.get('/clerk/:clerkUserId', getUserByClerkId);
router.get('/:id', getUserById);

export default router;