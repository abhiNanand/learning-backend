import express from 'express';

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
  res.send('hello world');});

app.get('/jokes',(req,res)=>{
  res.send('Rahul Gandhi');});

app.listen(port,()=>{
  console.log(`server running on port ${port}`);
});


// app.get('/about/:name', (req, res) => {
//   const name = req.params.name;
//   res.send(`My name is ${name}`);
// });