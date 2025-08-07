import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
name:{
  type:String,
  required:[true,"Name is required"],
  trim:true,
},
email:{
  type:String,
  required:true,
  unique:true,
},
gender:{
  type:String,
  required:true,
  enum: {
      values: ["male", "female", "other"],
      message: "Gender must be 'male', 'female', or 'other'"
    },
},
createdAt:{
   type: Date,
    default: Date.now
},
});

export const Student = mongoose.model("Student",studentSchema);
//Note:
// Mongoose will automatically convert:
// "Student" → "students" so collection ka name show hoga students.

//export const A = mongoose.model("B", studentSchema);
//आप अपने पूरे code में model को A से access करोगे, ना कि "B" से।

 // "B" सिर्फ Mongoose को internally model name और उससे collection name generate करने के लिए दिया गया है।

// लेकिन actual usable object आपका variable A है — जिसे आप functions में use करोगे।

