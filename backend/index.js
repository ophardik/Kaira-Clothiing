const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const connectToMongoDB=require("./config/db")
const userRoute=require("./Routes/userRoute")
const productRoute=require("./Routes/productRoute")
const cartRoute=require("./Routes/cartRoute")
const paymentRoute=require("./Routes/paymentRoute")
const app=express();
const PORT=8008;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
connectToMongoDB();

app.use("/api",userRoute)
app.use("/product",productRoute)
app.use("/cart",cartRoute)
app.use("/payment",paymentRoute)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})