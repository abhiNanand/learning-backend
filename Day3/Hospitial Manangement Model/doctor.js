import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      string: Number,
      default: 0,
    },
  },
  { timstamps: true }
); 

export const Doctor = mongoose.model("Doctor", doctorSchema);
