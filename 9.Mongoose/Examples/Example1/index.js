import express from "express";
import mongoose from "mongoose";
import { Student } from "./student.model.js";

const app = express();
app.use(express.json());

//connect to mongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log("MongoDb connection Error:", err));

//post data  .save() Example 1
app.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//send all data .find() Example 2
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//send data that matches to email using findOne    Example 3
//agar find use kartey tho array ke andher json jata aur sare email jo jo match karta wo sab ka documnet jata array ke andher but findone se ek hi jata hai json me.

app.get('/students/:email',async(req,res)=>{
const email = req.params.email;
try{
const student = await Student.findOne({email: email});
if(!student)
 return res.status(400).json({message:"studnet not found"});

res.json(student); //send all data of the user whose email matches
}
catch(err){
  res.status(400).json({message:err.message});
}
});

//Example 4 delete Model.deleteOne({ ... })
// To Delete Many Documents ➤ Model.deleteMany({ ... })
// Deletes the first matching document based on the condition.
app.delete("/student/email/:email",async(req,res)=>{
  try{
    const result = await Student.deleteOne({email:req.params.email});

    if(result.deletedCount===0)
     return res.status(400).json({message:"not found"});
    res.json({message:"student deleted successfully"});
  }
  catch(error){
    res.status(400).json({message:error.message});
  }
});

//delete by ID  Delete By ID (Shortcut) ➤ Model.findByIdAndDelete(id)
//syntax
//const student = await Student.findByIdAndDelete(req.params.id);

//=============================================================================================
//Example 5: Model.findByIdAndUpdate(id, updateObj, options)
// Update one student by _id
app.put("/student/:id",async(req,res)=>{
  try{
  const updateStudent= await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true,runValidators:true}
  );

   if (!updateStudent) {
      return res.status(404).json({ message: "student not found" });
    }
    res.json(updateStudent);
  }
  catch(error){
    res.status(400).json({message:error.message});
  }
});
  

// ✅ new: true
// By default, Mongoose returns the original document (before update).
// When you set new: true, it returns the updated document (after changes).
// Example:
// ✅ runValidators: true
// Makes sure the new data follows the rules defined in your Mongoose schema (like required, minLength, match, etc.).
// Without this option, those validations may not run during update, especially when using findByIdAndUpdate.
//=========================================================================================

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
