//  first approach to connect
// import express from "express";
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

//     app.on("error", (error) => {
//       console.log("error", error);
//           throw error;
//     }); //ye isleeye q ki kai baar database connect ho gya pr express baat nhi kr pa rhe hai tho ye laga deye hai.

//     app.listen(process.env.PORT,()=>{
//       console.log(`app is listeinging on port ${process.env.PORT}`);
//     });

//   } catch (error) {
//     console.log(error);
//     throw err;
//   }
// })();





//second approach to connect
import connectDB from "./db/index.js"; //agar sirf ./db kartey hai tho error aata hai
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
}); // Loads environment variables from .env file
connectDB();



/*
✅  Environment Setup Should Happen Once, at the Entry Point
dotenv.config() should be done only once, and as early as possible — ideally in your main entry file (like index.js or server.js).

That way:

All files (connectDB, route handlers, etc.) that use process.env will have access to those variables.

You avoid duplicate calls to dotenv.config() in multiple files.

change "dev": "nodemon src/index.js" to  "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
  }, to run this features


note

when we do npm run dev . we will get this error 
Error [ERR_UNSUPPORTED_DIR_IMPORT]: Directory import ... is not supported resolving ES modules
This means you're trying to import a folder (/db) directly, which is not allowed in ES Modules (when using import instead of require).

*/