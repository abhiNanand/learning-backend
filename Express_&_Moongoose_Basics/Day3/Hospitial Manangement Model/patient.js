import moongoose from 'moongoose';

const patientSchema= new moongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  diagonisedWith:{
    type:String,
    required:true,
  },
  age:{
    number,
  },
  bloodgroup:{
    type:String,
  },
  gender:{
    type:Stirng,
    enum:['Male','Female','Other'],
    required:true,
  },
  address:{
    type:String,
    required:true,
  },
  admittedIn:{
    type: moongoose.Schema.Types.ObjectId,
    ref:"Hospital",
  },
  
},{timstamps:true});

export const Patient = moongoose.model("Patient",patientSchema);