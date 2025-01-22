const express=require("express")
const { addProduct, deleteProduct, singleProduct, allProduct, singleVariety } = require("../Controllers/productController")
const router=express.Router()

router.post("/add",addProduct)
router.delete("/delete",deleteProduct)
router.get("/singleProduct",singleProduct)
router.get("/allProduct",allProduct)
router.get("/singleVariety",singleVariety)
module.exports=router