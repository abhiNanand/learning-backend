import { Employee } from "./employee.model.js";
import express from "express";
import mongoose from "mongoose";

const app=express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => console.log("MongoDb connected"))
  .catch((err) => console.log("MongoDb connection Error:", err));
 
app.get('/employee',async(req,res)=>{
  try{
  const data =await Employee.find();
  if(!data)
    return res.status(400).json({message:"no data found"});
  res.json(data);
   } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/employee/send',async(req,res)=>{
  try{
const data = req.body;
const employees = await Employee.insertMany(data);
res.status(200).json(employees);
  }
  catch(err){
    res.status(200).json({message:err.message});
  }
});



app.listen(3000,()=>{console.log("http://localhost:3000")});