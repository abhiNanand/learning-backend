import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser"; //iska kaam hai user ka jo browser hai uska cookie access karna / set karna server se


const app = express();
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials:true
}));

//agar koi json me data bheje tho uske leyee hai
app.use(express.json({limit:"16kb"}));

app.use(express.urlencoded({extended:true,limit:"16kb"}));

app.use(express.static("public"));

app.use(cookieParser());

export {app};