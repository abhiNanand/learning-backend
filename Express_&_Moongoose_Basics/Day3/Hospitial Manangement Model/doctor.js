import moongoose from 'moongoose';

const doctorSchema= new moongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  salary:{
    type:String,
    required:true,
  },
  qualification:{
    type:String,
    required:true,
  },
  experienceInYears:{
    string:Number,
    default:0,
  },

},{timstamps:true});

export const Doctor = moongoose.model("Doctor",doctorSchema);