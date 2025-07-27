import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

//1. send text
app.get('/',(req,res)=>{
  res.send('hello world')
});

//2. send json
const data = { "name": "Abhishek", "age": 22 }
app.get('/about',(req,res)=>{
res.json(data);
});

app.listen(3000,()=>console.log("server running on http://localhost:3000"));