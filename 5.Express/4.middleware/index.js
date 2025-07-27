//1.Basic Custom Middleware

import express from 'express';

const app = express();

//custom middleware that logs all request
function logger(req,res,next){
  console.log(`${req.method} ${req.url}`);
  next(); //pass control to next middleware or router.
}

app.use(logger); //apply middleware globally

app.get('/',(req,res)=>{
  res.send("hello world");
});

app.listen(3000);


//====================================================================================================

//🔹 2. Middleware for Request Time Logging

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log('Request received at:', req.requestTime);
  next();
});

app.get('/time', (req, res) => {
  res.send(`Request time: ${req.requestTime}`);
});

//🔹 3. Conditional Middleware (Auth Check Example)

function authMiddleware(req, res, next) {
  const isAuthenticated = false; // simulate
  if (isAuthenticated) {
    next(); // allow
  } else {
    res.status(401).send('Unauthorized');
  }
}

app.get('/dashboard', authMiddleware, (req, res) => {
  res.send('Welcome to dashboard!');
});