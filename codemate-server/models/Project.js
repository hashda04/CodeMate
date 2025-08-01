import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name:{type: String, required:true},
    description: String,
    techstack: [String],
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    members: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
        createdAt: {type: Date, default: Date.now},
});

export default mongoose.model('Project',projectSchema);