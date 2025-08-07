
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
      type:String,
      require:true,
    },
    lastName:{
      type:String,
      require:true,
    },
    email:{
      type:String,
      requrie:true,
      unique:true,
    },
    jobTitle:{
      type:String,
    },
},{timestamps:true});

const User = mongoose.model("user",userSchema);

module.exports = User;