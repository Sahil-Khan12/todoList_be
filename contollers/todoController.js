import Task from "../models/model.js";

export const addTask = async (req, res) => {
    try {
        const { title, status, priority } = req.body;
        const task = new Task({
            title,
            status,
            priority
        });

        await task.save();

        res.status(201).json({ message: "Task created successfully", task });
    } catch (error) {
        res.status(500).json({ error: "Failed to create task", details: error.message });
    }
};

export const fetchTask = async (req, res) => {
    try {
        const { id } = req.query; // Destructure the `id` from query parameters
        if (id) {
            const task = await Task.findById(id); // Singular `task` since it’s one item
            if (!task) {
                return res.status(404).json({ error: "Task not found" });
            }
            return res.status(200).json({ task });
        }

        const tasks = await Task.find(); // Fetch all tasks if `id` is not provided
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch tasks", details: error.message });
    }
};



export const updateTask = async (req, res) => {
    try {
        const { id } = req.query;
        const { title, description, status, priority } = req.body;

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { title, description, status, priority },
            { new: true, runValidators: true } 
        );

        if (!updatedTask) {
            return res.status(404).json({ error: "Task not found" });
        }

        res.status(200).json({ message: "Task updated successfully", task: updatedTask });
    } catch (error) {
        res.status(500).json({ error: "Failed to update task", details: error.message });
    }
};


export const deleteTask = async (req, res) => {
    try {
        const { id } = req.query;

        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ error: "Task not found" });
        }

        res.status(200).json({ message: "Task deleted successfully", task: deletedTask });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete task", details: error.message });
    }
};
