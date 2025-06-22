import mongoose from "mongoose";

const medicalRecordSchema = newmongoosee.Schema({}, { timstamps: true });

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);
