const userModel=require("../Models/userModel")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
require('dotenv').config()

const signup=async(req,res)=>{
    try {
        const {userName,email,password,profilePic,is_active,is_deleted}=req.body;
        const existingUser=await userModel.findOne({email})
        if(existingUser){
            return res.status(400).json({
                success: false,
                msg: "Username already taken or email is wrong"
        })}
        const hashPasssword=await bcrypt.hash(password,10)
        const user=await userModel.create({
            userName,
            email,
            password:hashPasssword,
            profilePic,
            is_active,
            is_deleted
        })
        return res.status(201).json({
            message:"User created successfully",
            user
        })
    } catch (error) {
        console.log("Error in signup api",error)
    }
}
const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await userModel.findOne({email});
        if (!user) {
            return res.status(401).json({ message: "Incorrect email or password" });
        }
        if (!user.is_active) {
            return res.status(401).json({ message: "User is not active" });
        }
        const isPasswordValid=await bcrypt.compare(password,user.password)
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Incorrect email or password" });
        }
        const token = jwt.sign({ email: user.email },  process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({
            success: true,
            msg: "Login successful",
            token,
            _id:user._id,
            userName: user.userName,
            email: user.email,
            is_active: user.is_active,
            is_deleted: user.is_deleted,
        });
    } catch (error) {
        console.log("error in login api",error)
    }
}

module.exports={signup,login}