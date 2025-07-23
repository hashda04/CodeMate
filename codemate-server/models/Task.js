import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: String,
    description : String,
    status: { type: String, default: 'todo'},
    assignedTo: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    projectId: {type: mongoose.Schema.Types.ObjectId, ref: 'Project'},
    createdAt: {type: Date, default: Date.now}
});

export default mongoose.model('Task',taskSchema);