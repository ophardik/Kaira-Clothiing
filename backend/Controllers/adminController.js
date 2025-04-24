const userModel=require("../Models/userModel")
const productModel=require("../Models/productModel")
const usersList = async (req, res) => {
    try {
      const allUsers = await userModel.find();
      return res.status(200).json({ data: allUsers });
      console.log(data)
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  const userDelete = async (req, res) => {
    try {
      const { id } = req.body;
  
      if (!id) {
        return res.status(400).json({ success: false, message: "User ID is required" });
      }
  
      const deletedUser = await userModel.findByIdAndDelete(id);
  
      if (deletedUser) {
        return res.status(200).json({
          success: true,
          message: "User Account Deleted Successfully",
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "User Not Found",
        });
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };
  
  
  

  const addProduct = async (req, res) => {
    try {
      const { title, description, price, image, category, is_active, is_deleted ,variety,images,colors,sizes} = req.body;
      await productModel.create({
        title,
        description,
        price,
        image,
        category,
        is_active,
        is_deleted,
        variety,
        images,
        colors,
        sizes,
      });
  
      return res.status(200).json({
        success: true,
        message: "Product created Successfully",
        title,
        description,
        price,
        image,
        category,
        is_active,
        is_deleted,
        variety,
        images,
        colors,
        sizes,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        success: false,
        msg: error.message,
      });
    }
  };

  
  const productList = async (req, res) => {
    try {
      const allProducts = await productModel.find({is_active:true});
      return res.status(200).json({ data: allProducts });
    } catch (error) {
      console.log(error);
      return res.status(401).json({
        success: "false",
        message: "Failed to fetch products",
      });
    }
  };

  const deleteProduct = async (req, res) => {
    try {
      await productModel.findByIdAndDelete(req.body._id).then((resp) => {
        res.status(200).json({
          status: true,
          message: "Product deleted successfully"
        });
      }).catch(err => {
        console.log("Product not found", err);
        res.status(404).json({
          status: false,
          message: "Product not found"
        });
      });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  };
  
  module.exports={usersList,userDelete,addProduct,deleteProduct,productList}