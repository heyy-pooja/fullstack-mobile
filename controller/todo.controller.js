const Todo=require("../models/Todo")
const asyncHandler = require("express-async-handler")


exports.getAllTodos= asyncHandler(async(req,res)=>{
    const result=Todo.find() 
     res.json({message:"Todo Fetch Success",result})
})
exports.addTodo=asyncHandler(async(req,res)=>{
    await Todo.create(req.body)
     res.json({message:"Todo add Success"})
})
exports.updateTodo=asyncHandler(async(req,res)=>{
    await Todo.findByIdAndUpdate(req.params.id,req.body)
     res.json({message:"Todo update Success"})
})
exports.deleteTodo=asyncHandler(async(req,res)=>{
    await Todo.findByIdAndDelete(req.params.id)
     res.json({message:"Todo delete Success"})
})

