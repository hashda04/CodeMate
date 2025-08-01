import express from 'express';
import Task from '../models/Task.js';
import verifyToken from '../middleware/verifyToken.js';
import Notification from '../models/Notification.js';


const router = express.Router();

//Create task
router.post('/:projectId', verifyToken, async(req,res) => {
    const{ title,description,status, assignedTo} = req.body;
    const { projectId } = req.params;
    try{ 
        const newTask = await Task.create({
        title,
        description,
        status: status || 'todo',
        assignedTo,
        projectId
       
    });
    //trigger notification
    if(assignedTo){
        await  Notification.create({
            userId:assignedTo,
            type:'task_assigned',
            message:`You were assigned a new task: "${title}"`,
            link: `/projects/${projectId}/tasks`
        });
    }
res.status(201).json({message: 'Task created', task: newTask});
} catch(err){
    res.status(500).json({message:err.message})
}
});

//Get all tasks for a project

router.get('/:projectId',verifyToken, async(req , res) => {
    const { projectId} = req.params;
    try{
        const tasks = await Task.find({projectId}).populate('assignedTo','name email');
        res.json(tasks);

    }catch(err){
        res.status(500).json({message: err.message});
    }
});

//Update a task

router.put('/:taskId' , verifyToken, async(req,res) => {
    const { taskId }= req.params;
    const { title , description , status, assignedTo} =req.body;
    try{
        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            { title, description, status, assignedTo},
            {new: true}
        );
        res.json({message: 'Task updated' , task:updatedTask});
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

// Delete the task

router.delete('/:taskId',verifyToken, async(req, res)=>{
    const {taskId}=req.params;
    try{
        await Task.findByIdAndDelete(taskId);
        res.json({message: ' Task deleted'});
    }catch(err){
        res.status(500).json({message: err.message})
    }
});

router.get('/user/:userId', verifyToken, async (req, res) => {
  try {
    const tasks = await Task.find({ assignedTo: req.params.userId }).populate('projectId', 'name');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



export default router;