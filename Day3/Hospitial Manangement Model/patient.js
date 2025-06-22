import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagonisedWith: {
      type: String,
      required: true,
    },
    age: {
      number,
    },
    bloodgroup: {
      type: String,
    },
    gender: {
      type: Stirng,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },
  { timstamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
