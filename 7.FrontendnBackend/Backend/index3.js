import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;
const SECRET_KEY = 'mysecretkey123';

const users = [
  { id: 'abhi7091', password: '123123' }
];

app.post('/login',(req,res)=>{
  const {id,password}= req.body;

  const user = users.find(u => u.id === id && u.password === password);
  if(!user){
    return res.status(401).json({message:'Invalid credentials'});
  }

  //create token
  const token = jwt.sign({id:user.id},SECRET_KEY,{expiresIn:'1h'});
  res.json({token});
});


//verfiy token before send data to user.
// i am using middleware without middleware ke v ho jayega app.get me v check kar saktey hai.

function authenticateToken(req,res,next){
  const authHeader = req.headers.authorization;

  if(!authHeader || !authHeader.startsWith('Bearer ')){
   return res.status(401).json({message:'No token provided'});;
  }
  const token= authHeader.split(' ')[1];

  //verifying token
  try{
    const decoded = jwt.verify(token,SECRET_KEY);
    req.user = decoded;
    next();
  }
  catch(err){
    return res.status(401).json({message:'Invalid or expired token'});
  }
}

app.get('/id',authenticateToken,(req,res)=>{
  res.json({id:req.user.id})
});



app.listen(PORT,()=>console.log("http://localhost:3000"));