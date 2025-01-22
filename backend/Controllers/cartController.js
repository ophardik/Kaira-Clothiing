const cartModel=require("../Models/cartModel");
const productModel = require("../Models/productModel");
const userModel = require("../Models/userModel");

const addToCart = async (req, res) => {
    try {
        const { userId, productId, quantity, sizes = "default" } = req.body;

        if (!userId || !productId || !quantity || sizes === undefined || sizes === null) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        var existingProduct = await cartModel.findOne({ userId, productId });
        
        if (existingProduct) {
            existingProduct.quantity = quantity;
            existingProduct.sizes = sizes;  // Ensure sizes are updated
            await existingProduct.save();  // Save the updated document
        } else {
            await cartModel.create({
                userId,
                productId,
                quantity,
                sizes,
            });
        }

        res.status(201).json({ message: "Product added to cart successfully" });
    } catch (error) {
        console.log("Error in addToCart API", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const cartList=async(req,res)=>{
    try {
        const{userId}=req.body;
        if(!userId){
            return res.status(400).json({
                success: false,
                msg: "UserId is required.",
              });
        }
          var productList=await cartModel.find({userId}).populate("productId")
          return res.status(200).json({
            success: true,
            msg: "Product list",
            data:productList
          })
    } catch (error) {
        console.log("Error in cartList api",error)
    }
}

const updateCartItem = async (req, res) => {
    try {
        const { userId, productId, quantity,sizes } = req.body;

        // Validate input
        if (!userId || !productId || typeof quantity !== 'number') {
            return res.status(400).json({
                success: false,
                msg: "UserId, ProductId, and Quantity are required.",
            });
        }

        // Handle quantity less than or equal to 0 (deleting item)
        if (quantity <= 0) {
            const deletedCartItem = await cartModel.findOneAndDelete({ userId: userId,productId: productId});

            if (!deletedCartItem) {
                return res.status(404).json({
                    success: false, 
                    message: 'Cart item not found or already removed'
                });
            }

            return res.status(200).json({ success: true, message: 'Cart item deleted successfully' });
        } else {
            // Handle updating cart item
            const updatedCartItem = await cartModel.findOneAndUpdate(
                { userId: userId, productId: productId,sizes:sizes },
                { quantity: quantity },
                { new: true } // Return the updated document
              );

            if (!updatedCartItem) {
                return res.status(404).json({ success: false, message: 'Cart item not found' });
            }

            return res.status(200).json({
                success: true,
                message: 'Cart item updated successfully',
                cartItem: updatedCartItem,
            });
        }
    } catch (error) {
        console.error('Error updating cart:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

const clearCart=async(req,res)=>{
    try {
        const userId=req.query.userId;
        if(!userId){
            return res.status(400).json({success:false,msg:'UserId is required.'});
        }
        const user=await userModel.findById(userId)
        if(!user){
            return res.status(404).json({success:false,msg:'User not found.'});
        }
        const cartItems=await cartModel.find({userId}).populate('productId')
        if (!cartItems || cartItems.length === 0) {
            return res.status(400).json({ error: "No products found in the cart." });
          }
          await cartModel.deleteMany({userId})
          return res.status(200).json({success:true,msg:'Cart cleared successfully.'})
    } catch (error) {
        
    }
}

module.exports={addToCart,cartList,updateCartItem,clearCart}