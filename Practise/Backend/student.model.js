// import mongoose from 'mongoose';

// const studentSchema = new mongoose.Schema({
// name:{
//   type:String,
//   required:[true,"Name is required"],
//   trim:true,
// },
// email:{
//   type:String,
//   required:true,
//   unique:true,
// },
// gender:{
//   type:String,
//   required:true,
//   enum: {
//       values: ["male", "female", "other"],
//       message: "Gender must be 'male', 'female', or 'other'"
//     },
// },
// createdAt:{
//    type: Date,
//     default: Date.now
// },
// });

// export const Student = mongoose.model("Student",studentSchema);

import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
name:{
  type:String,}
});

export const Student = mongoose.model("Student",studentSchema);