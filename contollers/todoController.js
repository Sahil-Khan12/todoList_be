import Task from "../models/model.js";

export const addTask = async (req,res)=>{
    const {todo} = req.body;
    const task = new Task({task:todo})
    await task.save();
    res.json({data:"save successasq "})
}
export const fetchTask = async (req,res)=>{
    const data = await Task.find();
    res.json({task:data})
}
export const updateTask = async (req,res)=>{
    const {todo}=req.body
    const id = req.params.id;
    const data = await Task.findOneAndUpdate({_id:id},{task:todo});
    res.json({msg:"task successfull"})
}
export const deleteTask = async (req,res)=>{
    const id = req.params.id;
    const data = await Task.findOneAndDelete({_id:id});
    res.json({msg:"delete successfull"})
}