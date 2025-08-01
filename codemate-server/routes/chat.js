import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

//Save message
router.post('/' , async(req,res) => {
    const {senderId, receiverId, message} = req.body;

    try{
        const newMsg = await Message.create({senderId,receiverId,message});
        res.status(201).json(newMsg);
    }catch (err){
        res.status(500).json({message:err.message});
    }
});

//Get conversation

router.get('/:user1,user2' , async (req,res) => {
    const {user1,user2} = req.paramsms;
    try{
        const msgs = await Message.find({
            $or:[
                {senderId: user1,receiverId: user2},
                {senderId:user2,receiverId:user1},
            ],
        }).sort({timestamp:1});
        res.json(msgs);
    }catch (err){
        res.status(500).json({message:err.message});
    }
});

export default router;