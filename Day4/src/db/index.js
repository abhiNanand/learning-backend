//second way to connect database
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";  //.js nhi lagayenge tho error aayega

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
console.log(
  `✅ MongoDB connected to database "${connectionInstance.connection.name}" on host "${connectionInstance.connection.host}"`
);
  } catch (error) {
    console.log("MongoDb connection error", error);
    process.exit(1); //immediately terminates the Node.js process. 0	means Success (no errors)
    //1 means	Error / failure occurred
  }
};

export default connectDB;
