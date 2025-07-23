import express from 'express';
import verifyToken from '../middleware/verifyToken.js';
import Notification from '../models/Notification.js';

const router  = express.Router();

//get all notifications for the logged-in user
router.get('/',verifyToken,async(req,res) => {
    try {
        const notifications = await Notification.find({userId: req.userId}).sort({createdAt: -1});
        res.json(notifications);
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

//Mark a notification as read

router.put('/:id/read', verifyToken, async(req,res) => {
    try{
        const updated = await Notification.findByIdAndUpdate(req.params.id, { isRead: true }, { new: true });
        res.json({message: 'Notification marked as read', notification:updated});
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

//delete a notification

router.delete('/:id',verifyToken, async(req,res) => {
    try{
        await Notification.findByIdAndDelete(req.params.id);
        res.json({message: 'Notification deleted'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

export default router;
