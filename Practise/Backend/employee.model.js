import mongoose from 'mongoose';
const {Schema, model}= mongoose;

const employeeSchema= Schema({
  name:String,
  age:Number,
  city:String,
  department: String,
  salary:Number,
  skills:[String],
  isAction:Boolean,
  joinedAt:Date,
});

export const Employee = model("Employee",employeeSchema);

