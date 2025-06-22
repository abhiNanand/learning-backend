import moongoose from 'moongoose';


const orderItemSchema = new moongoose.Schema({
  productId:{
    type: moongoose.Schema.Types.ObjectId,
    ref: "Product"
  },
  quantity:{
    type:Number,
    required:true,
  }
})

const orderSchema= new moongoose.Schema({
  orderPrice:{
    type:Number,
    required:true,
  },
  customber:{
    type: moongoose.Schema.Types.ObjectId,
    ref:"User",
  },
  orderItems:{
    type:[orderItemSchema ],//isko dushre tarike se v kar saktey hai. type:[{type: , ref, }] 
  },
  address:{
    type:String,
    required:true,
  },
  status:{
    type:String,
    enum:["Pending", "Cancelled", "Delivered"],//iska matlab ki itna option me se hi koi ek choose kar saktey hai
    default: "Pending"
  }
},{timestamps:true});

export const Order= moongoose.model("Order",orderSchema);