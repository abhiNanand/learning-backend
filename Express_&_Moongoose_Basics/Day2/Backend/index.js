import express from 'express';
const app= express();



const jokes = [
    {
      "id": 1,
      "question": "Why don't scientists trust atoms?",
      "answer": "Because they make up everything!"
    },
    {
      "id": 2,
      "question": "Why did the scarecrow win an award?",
      "answer": "Because he was outstanding in his field!"
    },
    {
      "id": 3,
      "question": "Why don't programmers like nature?",
      "answer": "It has too many bugs."
    },
    {
      "id": 4,
      "question": "Why did the function break up with the loop?",
      "answer": "Because it kept going around in circles."
    },
    {
      "id": 5,
      "question": "How do you comfort a JavaScript bug?",
      "answer": "You console it."
    }
  ];


app.get('/api/jokes',(req,res)=>{
  res.send(jokes);
});


app.get('/',(req,res)=>{
  res.send("server is ready");
});

const port = 3000;

app.listen(port,()=>{
  console.log('server running at 3000');
});