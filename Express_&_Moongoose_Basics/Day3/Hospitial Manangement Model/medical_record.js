import moongoose from 'moongoose';

const medicalRecordSchema= new moongoose.Schema({},{timstamps:true});

export const MedicalRecord = moongoose.model("MedicalRecord",medicalRecordSchema);







