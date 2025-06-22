import moongoose from 'moongose';

const productSchema = new moongoose.Schema({
  description:{
    required:true,
    type:String,
  },
  name:{
    required:true,
    type:String
  },
  productImage:{
type:String,
  },
  price:{
    type:Number,
  },
  stock:{
    default:0,
    type:Number,
  },
  category:{
    type: moongoose.Schema.Types.ObjectId,
    ref:'Category',
    required:true,
  },
  owner:{
    type:moongoose.Schema.Types.ObjectId,
    ref:"User",
  },

},{timestamps:true});

export const Product =  moongoose.model("Product",productSchema);

