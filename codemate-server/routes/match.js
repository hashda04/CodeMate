import express from 'express';
import verifyToken from '../middleware/verifyToken.js';
import User from '../models/User.js';

const router = express.Router();

router.get('/' , verifyToken, async (req,res) => {
        try {
            const currentUser = await User.findById(req.userId);
            const matches = await User.find({
                _id : { $ne: req.userId},
                $or : [
                    { skills: {$in:currentUser.skills} },
                    {interests: {$in: currentUser.interests}}
                ]
            });
            res.json({matches});
        }catch(err)
{
    res.status(500).json({message:err.message});
}
    });

    export default router;