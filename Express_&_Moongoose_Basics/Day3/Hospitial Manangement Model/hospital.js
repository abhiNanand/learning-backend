import moongoose from 'moongoose';

const hospitalSchema= new moongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  addressLine1:{
    type:String,
  },
  addressLine2:{
    type:String,
  },
  city:{
    type:String,
    required:true
  },
  pincode:{
    type:Number,
    required:true
  }
},{timstamps:true});

export const Hospital = moongoose.model("Hospital",hospitalSchema);