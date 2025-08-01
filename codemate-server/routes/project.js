import express from 'express';
import verifyToken from '../middleware/verifyToken.js';
import Project from '../models/Project.js';
import Notification from '../models/Notification.js';
const router = express.Router();

//Create project
router.post('/',verifyToken, async(req,res) => {
    const {name, description,techstack} = req.body;

    try{
        const newProject = await Project.create({
            name,
            description,
            techstack,
            createdBy: req.userId,
            members: [req.userId],
        });

        res.status(201).json({message : 'Project created', project: newProject});
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

//Get all projects
router.get('/', async (req, res) => {
    try{
        const projects = await Project.find();
        res.json(projects);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

//Join a project

router.post('/join/:projectId', verifyToken, async(req,res) => {
    const { projectId } = req.params;

    try{
        const project = await Project.findById(projectId);
        if(!project.members.includes(req.userId)){

            project.members.includes(req.userId);
            await project.save();
        }
        res.json({message:'Joined project', project});
    }catch (err){
        res.status(500).json({message: err.message});
    }
});

//Update a project
router.put('/:id', verifyToken , async(req,res) => {
    try{
       const updated = await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
       );
            res.json({message: 'Project updated' , project:updated});
    }catch(err){
        res.status(500).json({ message: err.message});
    }
    });

    //Delete the project

    router.delete('/:id', verifyToken, async( req, res)=> {
        try{
            await Project.findByIdAndDelete(req.params.id);
            res.json({message: 'Project deleted'});
        } catch (err){
            res.status(500).json({message: err.message});
        }
    });

    router.put('/:id/add-member' , verifyToken, async(req,res) => {
        const { userIdToAdd } = req.body;

        try{
            const updatedProject = await Project.findByIdAndUpdate(
                req.params.id,
                {$addToSet: {members: userIdToAdd}}, // addToSet avoids duplicates
                {new: true}
            );
            res.json({message: 'Member added', project: updatedProject});
        }catch(err){
            res.status(500).json({message: err.message});
        }
    });

    router.put('/:id/remove-member', verifyToken, async (req,res) => {
        const { userIdRemove } = req.body;

        try{
            const updatedProject = await Project.findByIdAndUpdate(
                req.params.id,
                {$pull: { members:
                    userIdRemove
                }},
                {new : true}
            );
            res.json({message:'Member removed', project: updatedProject});
        }catch(err){
            res.status(500).json({message: err.message});
        }
    });

    //Get projects created by current user

    router.get('/my-projects', verifyToken, async(req,res) => {
        try{
            const projects = await Project.find({createdBy: req.userId});
            res.json(projects);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    });

    //Get projects where user is a team member

    router.get('/with-me',verifyToken, async(res,req) => {
        try{
            const projects = await Project.find({members:req.userId});
            res.json(projects);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    });

    //filter projects by techstack

    router.get('/search', async(req,res) => {
        const tech = req.query.tech;
        try{
            const projects = await Project.find({techstack:tech});
            res.json(projects);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    });

    router.put('/:id/add-member',verifyToken,async(req,res) => {
        const { userIdToAdd }=req.body;

        try{
            const updatedProject = await Project.findByIdAndUpdate(req.params.id, { $addToSet: { members: userIdToAdd}}, {new: true});

            //send notification
            await Notification.create({
                userId: userIdToAdd,
                type: 'project_joined',
                message: `You were added to the project "${updatedProject.name}"`,
                link: `/projects/${updatedProject._id}`
            });
            res.json({message:'Member added',project: updatedProject});
        }catch(err){
        res.status(500).json({message: err.message});
    }
    });

export default router;