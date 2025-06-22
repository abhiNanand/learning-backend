import mongooes from 'mongooes';

//timestamp hame createdAt and updatedAt deta hai
const userSchema = new mongooes.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
  },
  password:{
    type:String,
    required:true,
  },
},{timestamps:true});

export const User = mongooes.model("User",userSchema);