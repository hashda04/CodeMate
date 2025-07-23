import express from 'express';
import User from '../models/User.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

//Update Profile 
router.put('/',verifyToken, async (req,res) => {
    const { name, skills,interests ,availability}= req.body;

    try {
        const updateUser = await 
        User.findByIdAndUpdate(
            req.userId,
            {skills , interests, availability},
            { new:true}

        );

        res.json({message : 'Profile updated', profile: updateUser});
    }catch (err){
        res.status(500).json({message:err.message});
    }
});

export default router;