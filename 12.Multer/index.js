// const express = require("express");
// const path = require("path");

// const app = express();

// app.set('view engine', 'ejs');

// app.get('/',(req,res)=>{
//   return res.render("index");
// });

// //ye form data ko parse karta hai. because frontend se data json me nhi aa rha form data me aa rha hai. app.use(express.urlencoded({ extended: false })) ka kaam hota hai HTML form se aane wale URL-encoded data ko parse karke req.body me JavaScript object banake rakhna.3️⃣ extended ka matlab
// // extended: false → simple key-value parsing (uses Node’s built-in querystring module)

// // extended: true → complex objects/arrays parse karne ke liye (qs library use hoti hai)
// app.use(express.urlencoded({extended:false}));

// const multer = require("multer");

// const upload = multer({dest:"upload"});//iska matalb ye hai ki frontend se jo v uplaod hoga vo hamre upload folter me aa jayega. ye jo const upload hai ye ek middleware hai jiska use hum app.post ke andher kr rhe hai. 

// app.post("/uploads",upload.single("profileImage"), (req,res)=>{

//   console.log(req.body);
//   console.log(req.file);
//   res.send("successfuly uploaded");
// });

// const PORT=3000;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

//===============================================================================================================//
const express = require("express");
const path = require("path");

const app = express();

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  return res.render("index");
});

//ye form data ko parse karta hai. because frontend se data json me nhi aa rha form data me aa rha hai. app.use(express.urlencoded({ extended: false })) ka kaam hota hai HTML form se aane wale URL-encoded data ko parse karke req.body me JavaScript object banake rakhna.3️⃣ extended ka matlab
// extended: false → simple key-value parsing (uses Node’s built-in querystring module)

// extended: true → complex objects/arrays parse karne ke liye (qs library use hoti hai)
app.use(express.urlencoded({extended:false}));

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req,file,cb){
    return cb(null, './upload')
  },
  filename: function(req,file,cb){
    return cb(null,`${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({storage:storage});
 
app.post("/uploads",upload.single("profileImage"), (req,res)=>{

  console.log(req.body);
  console.log(req.file);
  res.send("successfuly uploaded");
});

const PORT=3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});