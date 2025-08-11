const express = require("express");
const path = require("path");
const app = express();

app.set("view engine","ejs");
//ab bata rhe ki view kis path pr hai
app.set("views",Path2D.resolve("./views"));

app.get("/",(req,res)=>{
    res.render("index",{name:"Abhishek"});
 });

app.listen(3000, () => console.log("Server running on port 3000"));
