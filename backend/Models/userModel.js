const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
    },
    is_active:{
        type:Boolean, 
        default:true
    },
    is_deleted:{
        type:Boolean,
        default:false
    },
})
const userModel=mongoose.model("User",userSchema)
module.exports=userModel