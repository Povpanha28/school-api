import express from 'express';
import { registerUser,loginUser,getAllUsers } from '../controllers/authetication.controller.js';
import { authenticateToken } from '../middleware/authetication.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', authenticateToken, getAllUsers);


export default router;