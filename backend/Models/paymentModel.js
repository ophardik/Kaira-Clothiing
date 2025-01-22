const mongoose=require("mongoose")
const paymentSchema=new mongoose.Schema({
    // userId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"User",
    //   required:true,
    // },
    paymentId:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    currency:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['approved','pending','failed'],
        default:'pending',
    },
    product_Url:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})
const paymentModel=mongoose.model("Payment",paymentSchema)
module.exports=paymentModel