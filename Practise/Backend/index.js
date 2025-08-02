// import express from 'express';
// import mongoose from 'mongoose';
// import {Student} from './student.model.js';

// const app = express();
// app.use(express.json());

// //connect to mongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/test").then(()=>console.log("MongoDb connected")).catch((err)=>console.log("MongoDb connection Error:",err));

// app.post("/students",async(req,res)=>{
//   try{
//     const student = new Student(req.body);
//     console.log(student);
//   const savedStudent = await student.save();
//   res.status(201).json(savedStudent);
//   }
//   catch(error){
//     res.status(400).json({message:error.message});
//   }
// });

// app.get('/',(req,res)=>{
//   res.json({message:"this is working fine"})
// })
// app.get('/students',(req,res)=>{
//   res.json({message:"this is working fine"})
// })

// app.listen(3000,()=>{
//   console.log("server is running at http://localhost:3000");
// });


import express from 'express';
// import mongoose from 'mongoose';
 
const app = express();
app.use(express.json());

 

// app.post("/students",async(req,res)=>{
//   try{
//     const student = new Student(req.body);
//     console.log(student);
//   const savedStudent = await student.save();
//   res.status(201).json(savedStudent);
//   }
//   catch(error){
//     res.status(400).json({message:error.message});
//   }
// });

app.get('/',(req,res)=>{
  res.json({message:"this is working fine"})
})
app.get('/students',(req,res)=>{
  res.json({message:"this is working fine"})
})

app.listen(3000,()=>{
  console.log("server is running at http://localhost:3000");
});