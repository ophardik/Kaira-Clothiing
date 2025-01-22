const express=require("express")
const { addToCart, cartList, updateCartItem, clearCart } = require("../Controllers/cartController")
const router=express.Router()
router.post("/addToCart",addToCart)
router.post("/cartList",cartList)
router.post("/updateCartItem",updateCartItem)
router.delete("/clearCart",clearCart)
module.exports=router