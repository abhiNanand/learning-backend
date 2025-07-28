import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

//1. send text
app.get('/',(req,res)=>{
  res.send('hello world')
});

//2. send json
const data = { "name": "Abhishek", "age": 22, imageUrl:'http://localhost:3000/image/pic1.jpeg' }
app.get('/about',(req,res)=>{
res.json(data);
});


//3. send image
app.use(express.static('public'));
app.listen(3000,()=>console.log("server running on http://localhost:3000"));