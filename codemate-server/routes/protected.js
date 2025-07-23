import express from 'express';
import verifyToken  from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/' , verifyToken, (req,res) => {
    res.json({message: `Welcome to the protected route,user ${req.userId}`});
});

export default router;