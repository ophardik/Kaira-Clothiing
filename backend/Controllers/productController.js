const productModel=require("../Models/productModel")

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
 
const deleteProduct = async (req, res) => {
    try {
      const productId=req.body._id;
      //  console.log(productId,"productId")
      if (!productId) {
        return res.status(400).json({
          success: false,
          msg: "Product ID is required",
        });
      }
      const delProduct=await productModel.findByIdAndDelete(productId)
      if (delProduct) {
        return res.status(200).json({
          success: true,
          message: "Product deleted Successfully",
        });
      } else {
        return res.status(404).json({
          success: false,
          msg: "Product not found",
        });
      }
    } catch (error) {
      return res.status(400).json({
        success: false,
        msg: "Error in delete product API",
      });
    }
  };
  
const singleProduct=async(req,res)=>{
  try {
    const productId=req.query.productId;
    // console.log(productId,"productId")
    const product=await productModel.findById(productId)
    if(product){
      return res.status(200).json({
        success:true,
        data:product
      })
    }else{
      return res.status(404).json({
        success:false,
        msg:"Product not found"
      })
    }
    
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: "Error in get single product API",
    })
  }
}
const singleVariety = async (req, res) => {
  try {
    const variety = req.query.variety;

    if (!variety) {
      return res.status(400).json({
        success: false,
        msg: "Variety is required",
      });
    }

    // console.log(variety, "variety");

    // Assuming `variety` is not an ID, use `findOne`
    const uniqueVariety = await productModel.find({ variety });

    if (uniqueVariety) {
      return res.status(200).json({
        success: true,
        data: uniqueVariety,
      });
    } else {
      return res.status(404).json({
        success: false,
        msg: "Product not found",
      });
    }
  } catch (error) {
    console.error("Error in get single product API:", error); // Improved logging

    return res.status(500).json({
      success: false,
      msg: "Error in get single product API",
    });
  }
};

const allProduct=async(req,res)=>{
  try {
    const allProducts=await productModel.find({})
    const structured=await allProducts.map((product)=>({
      title: product.title,
      description: product.description,
      price: product.price,
      image: product.image,
      category: product.category,
      is_active: product.is_active,
      is_deleted: product.is_deleted,
      _id: product._id,
      variety:product.variety,
      sizes:product.sizes,
    }))
    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: structured, // Each product is inside data
    });
  } catch (error) {
    console.log("Error in fetching products");
    return res.status(400).json({
      success: false,
      msg: "Error in fetching products",
    })
  }
}
  module.exports={addProduct,deleteProduct,singleProduct,allProduct,singleVariety}