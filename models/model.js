import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
        task: {
            type: String,
            required: [true, 'Task title is required'],
            trim: true,
            maxlength: [100, 'Task title must be less than 100 characters'],
        },
    },
    {
        timestamps: true, 
    }
);

const Task = mongoose.model('Task', taskSchema);

export default Task;
