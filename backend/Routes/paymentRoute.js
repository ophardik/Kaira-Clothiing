const express=require("express")
const { payProduct, executePayment } = require("../Controllers/paymentController")
const router=express.Router()

router.post("/processing",payProduct)
router.post("/success",executePayment)
router.get('/cancel', (req, res) => res.send('Payment canceled'));
module.exports=router