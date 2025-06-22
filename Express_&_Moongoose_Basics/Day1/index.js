//common js
const express = require('express');
//module js
//import express from 'express';

const app = express();
const port = 3000

//get request
// '/' - iska meaning ye hai ki agar  yha '/' pr koi v request aati hai tho response bhejna hai.
app.get('/',(req,res)=>{
  res.send("hello world");
});

//example2
app.get('/twitter',(req,res)=>{
  res.send('<h1>hello twitter</h1>');
});

app.listen(port,()=>{
  console.log(`example app listeining on port ${port}`);
})

//after npm run start go and check localhost:3000 and localhost:3000/twitter and check the response