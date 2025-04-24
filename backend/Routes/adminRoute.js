const { usersList, userDelete, addProduct, productList, deleteProduct } = require("../Controllers/adminController");

const express=require("express");
const router=express.Router();

router.get("/allUsers",usersList)
router.delete("/deleteUser",userDelete)
router.post("/addProduct",addProduct)
router.get("/productList",productList)
router.delete("/deleteProduct",deleteProduct)

module.exports = router;