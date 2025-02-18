import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../../Designing/css/Product.css'
import Arct from '../../Designing/images/arct-icon.png'
import MainLogo from '../../Designing/images/main-logo.png'
import Visa from'../../Designing/images/visa-card.png'
import Paypal from'../../Designing/images/paypal-card.png'
import Master from'../../Designing/images/master-card.png'
import Logo from'../../Designing/images/dhl-logo.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaShoppingCart } from 'react-icons/fa';
import { ToastContainer, toast } from "react-toastify";
import '../../Designing/css/Toast.css';
import AddToBag from '../Cart/AddToBag'
import '../../Designing/css/Bag.css'

const ProductSpecific = () => {
 const [product,setProduct]=useState([])
 const [cartItems,setCartItems]=useState([])
 const [size,setSize]=useState("")
 const [isSidebarVisible, setIsSidebarVisible] = useState(false);
 const navigate=useNavigate()
 const [loading,setLoading]=useState(true)
 const { productId } = useParams();
 const userId=sessionStorage.getItem("userId")
 const BASE_URL = process.env.REACT_APP_BACKEND_URL || "https://kaira-clothiing-fash.onrender.com";


const handleAddToBag = async () => {
  if (!userId) {
    toast.error("Please login to add product to cart");
    setTimeout(() => {
      toast.info("Redirecting...");
      
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Wait for 2 seconds before redirecting
      
    }, 2000); // 
    return;
  }

  const existingItem = cartItems.find(
    (item) => item.productId._id === product._id
  );

  if (existingItem) {
    const updatedItem = cartItems.map((item) =>
      item.productId._id === product._id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedItem);
    setLoading(false)
    // toast.success("Product quantity updated in the cart");
    return;
  }

  const data = {
    userId,
    productId: product._id, // Already present in data
    quantity: 1,
    sizes: size,
  };

  try {
    const response = await axios.post(`${BASE_URL}/cart/addToCart`, data);

    const updatedCart = [...cartItems, { ...data, productId: { _id: product._id } }];
    setCartItems(updatedCart);
    console.log("Updated Cart:", updatedCart);

    setIsSidebarVisible(true);
    setLoading(false)
    // toast.success("Product added to the cart");
  } catch (error) {
    console.error("Error adding item to cart:", error);
    setLoading(false)
    toast.error("Something went wrong while adding the product to the cart");
  }
};
 


 const handleColorSelect=(color)=>{
  toast.error(`Color  is out of stock`, {
  });
 }

 const handleSizeSelect = (size) => {
  setSize(size)
  // toast.info(`Size ${size} selected`, {
  //   position: "top-right",
  //   autoClose: 3000, // Auto-close after 3 seconds
  // });
};


 console.log(productId,"productId")
    const fetchingProduct= async()=>{
        try {     
          const response = await axios.get(`${BASE_URL}/product/singleProduct?productId=${productId}`);
          setProduct(response.data.data)
          setLoading(false)
        } catch (error) {
          console.log("Error in fetching product",error)
          setLoading(false)
        }
      }
    useEffect(()=>{
      fetchingProduct()
    },[productId])
  return (
    <div>
         <nav className="navbar navbar-expand-lg bg-light text-uppercase fs-6 p-3 border-bottom align-items-center">
          <div className="container-fluid">
            <div className="row justify-content-between align-items-center w-100">
              <div className="col-auto">
                <a className="navbar-brand text-white" href="index.html">
                  <svg width={112} height={45} viewBox="0 0 112 45" xmlns="http://www.w3.org/2000/svg" fill="#111">
                    <path d="M2.51367 34.9297C2.58398 34.6836 2.64844 34.3789 2.70703 34.0156C2.77734 33.6523 2.83594 33.2012 2.88281 32.6621C2.92969 32.123 2.96484 31.4844 2.98828 30.7461C3.01172 29.9961 3.02344 29.123 3.02344 28.127V16.6836C3.02344 15.6875 3.01172 14.8203 2.98828 14.082C2.96484 13.332 2.92969 12.6875 2.88281 12.1484C2.83594 11.5977 2.77734 11.1406 2.70703 10.7773C2.64844 10.4141 2.58398 10.1094 2.51367 9.86328V9.79297H6.73242V9.86328C6.66211 10.1094 6.5918 10.4141 6.52148 10.7773C6.46289 11.1406 6.41016 11.5977 6.36328 12.1484C6.32812 12.6875 6.29297 13.332 6.25781 14.082C6.23438 14.8203 6.22266 15.6875 6.22266 16.6836V20.6035L16.4883 12.2188C17.6367 11.2813 18.2109 10.4727 18.2109 9.79297H23.1504V9.86328C22.459 10.0273 21.7559 10.3437 21.041 10.8125C20.3379 11.2695 19.5879 11.832 18.791 12.5L9.7207 20.0938L20.6367 32.082C21.0938 32.5508 21.4805 32.9434 21.7969 33.2598C22.125 33.5645 22.4121 33.8223 22.6582 34.0332C22.9043 34.2324 23.127 34.4023 23.3262 34.543C23.5371 34.6719 23.7539 34.8008 23.9766 34.9297V35H18.8262C18.7793 34.8945 18.6973 34.7598 18.5801 34.5957C18.4746 34.4316 18.3457 34.2617 18.1934 34.0859C18.0527 33.9102 17.8945 33.7285 17.7188 33.541C17.5547 33.3535 17.3965 33.1777 17.2441 33.0137L6.22266 20.9199V28.127C6.22266 29.123 6.23438 29.9961 6.25781 30.7461C6.29297 31.4844 6.32812 32.123 6.36328 32.6621C6.41016 33.2012 6.46289 33.6523 6.52148 34.0156C6.5918 34.3789 6.66211 34.6836 6.73242 34.9297V35H2.51367V34.9297ZM45.3846 35V34.9297C45.408 34.8711 45.4256 34.7832 45.4373 34.666C45.4491 34.5488 45.4549 34.4434 45.4549 34.3496C45.4549 33.9863 45.4022 33.5879 45.2967 33.1543C45.203 32.709 45.0155 32.1582 44.7342 31.502L42.6073 26.7207C41.951 26.6973 41.078 26.6855 39.9881 26.6855C38.8983 26.6855 37.7205 26.6855 36.4549 26.6855C35.5291 26.6855 34.6327 26.6855 33.7655 26.6855C32.91 26.6855 32.1366 26.6973 31.4452 26.7207L29.4237 31.3613C29.2479 31.7949 29.0604 32.2695 28.8612 32.7852C28.662 33.3008 28.5623 33.8223 28.5623 34.3496C28.5623 34.502 28.5741 34.6309 28.5975 34.7363C28.6209 34.8301 28.6444 34.8945 28.6678 34.9297V35H25.0819V34.9297C25.2928 34.707 25.5565 34.3145 25.8729 33.752C26.1893 33.1777 26.535 32.4629 26.91 31.6074L36.9823 9.26562H38.3885L47.9334 30.7461C48.1561 31.25 48.3846 31.7422 48.619 32.2227C48.8651 32.6914 49.0936 33.1133 49.3045 33.4883C49.5155 33.8633 49.703 34.1797 49.867 34.4375C50.0311 34.6953 50.1424 34.8594 50.201 34.9297V35H45.3846ZM33.994 25.1738C34.6737 25.1738 35.3709 25.1738 36.0858 25.1738C36.8006 25.1621 37.4979 25.1562 38.1776 25.1562C38.869 25.1445 39.5311 25.1387 40.1639 25.1387C40.7967 25.127 41.3709 25.1152 41.8866 25.1035L36.9471 13.9414L32.0955 25.1738H33.994ZM54.6989 34.9297C54.7692 34.6836 54.8337 34.3789 54.8923 34.0156C54.9509 33.6523 55.0036 33.2012 55.0505 32.6621C55.0973 32.123 55.1325 31.4844 55.1559 30.7461C55.1794 29.9961 55.1911 29.123 55.1911 28.127V16.6836C55.1911 15.6875 55.1794 14.8203 55.1559 14.082C55.1325 13.332 55.0973 12.6875 55.0505 12.1484C55.0036 11.5977 54.9509 11.1406 54.8923 10.7773C54.8337 10.4141 54.7692 10.1094 54.6989 9.86328V9.79297H58.9176V9.86328C58.8473 10.1094 58.777 10.4141 58.7067 10.7773C58.6481 11.1406 58.5954 11.5977 58.5485 12.1484C58.5134 12.6875 58.4781 13.332 58.4431 14.082C58.4206 14.8203 58.4089 15.6875 58.4089 16.6836V20.6035L68.6746 12.2188C69.823 11.2813 70.3972 10.4727 70.3972 9.79297H75.336V9.86328C74.645 10.0273 73.9427 10.3437 73.2282 10.8125" />
                  </svg>
                </a>
              </div>
              <div className="col-auto ms-auto">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto align-items-center justify-content-center">
                    <li className="nav-item px-2">
                      <Link className="nav-link  text-uppercase" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item px-2">
                      <Link className="nav-link text-uppercase" to="/about">About</Link>
                    </li>
                    <li className="nav-item px-2">
                      <Link className="nav-link text-uppercase" to="/products">Products</Link>
                    </li>

                    <li className="nav-item px-2 dropdown">
                      <a className="nav-link active dropdown-toggle text-uppercase" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className=" dropdown-item" to="/men">Men</Link></li>
                        <li><Link className="dropdown-item" to="/women">Women</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item px-2">
                      <Link className="nav-link text-uppercase" to="/cart"><FaShoppingCart size={22}/></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
       
        {loading && (
  <div className="spinner">
    <div className="lds-dual-ring"></div>
  </div>
)}

        <div className="product-details">
  <div className="image-container">
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={10}
      slidesPerView={1}
    >
      <style>
        {
          `@media (min-width: 769px) {
        .image-container {
          height: 680px; 
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;         
        }
        .image-container img {
          width: 100%;
        height: 100%;
        object-fit: cover; /* Ensures image covers the container */
        transition: transform 0.3s ease;
        }`
        }
      </style>
      <SwiperSlide>
        <img src={product.image} alt={product.title} />
      </SwiperSlide>
      {product.images &&
        product.images.map((imgUrl, index) => (
          <SwiperSlide key={index}>
            <img src={imgUrl} alt={`Additional ${index + 1}`} />
          </SwiperSlide>
        ))}
    </Swiper>
  </div>

  <div className="content-container">
    <div className="product-info">
      <div className="product-info-frame">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>

    <div className="color-options">
      <p style={{ fontWeight: "bold", marginLeft: "10px" }}>Select Color:</p>
      <div
        className="color-samples"
        style={{ display: "flex", gap: "10px", marginLeft: "10px" }}
      >
        {product.colors &&
          Array.isArray(product.colors) &&
          product.colors.map((color, index) => (
            <button
              key={index}
              className="color-sample"
              style={{
                backgroundColor: color,
                width: "20px",
                height: "20px",
                border: "2px solid #ddd",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              onClick={() => handleColorSelect(color)}
            ></button>
          ))}
           <ToastContainer />
      </div>
    </div>

    <div className="size-options">
      <p style={{ fontWeight: "bold", marginLeft: "10px" }}>Available Sizes:</p>
      <div className="size-samples" style={{ display: "flex", gap: "10px" }}>
        {product.sizes &&
          Array.isArray(product.sizes) &&
          product.sizes.map((sizeOption, index) => (
            <button
              key={index}
              className="size-sample"
              style={{
                padding: "10px 20px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                cursor: "pointer",
                backgroundColor: sizeOption === size ? "#f0f0f0" : "white", // Highlight selected size
                borderColor: sizeOption === size ? "#007BFF" : "#ddd", // Border color for selected size
                fontWeight: sizeOption === size ? "bold" : "normal", // Bold text for selected size
              }}
              onClick={() => handleSizeSelect(sizeOption)} // Handle size selection
            >
              {sizeOption}
            </button>
          ))}
      </div>
    </div>
    <div className="add-to-bag-container">
      <button className="add-to-bag" onClick={handleAddToBag}>
        Add to Bag
      </button>
    </div>
  </div>
  {/* {isSidebarVisible && (
        <AddToBag cartItems={cartItems} setIsSidebarVisible={setIsSidebarVisible} />
      )} */}
{isSidebarVisible && (
  <>
    <div className="overlay" onClick={() => setIsSidebarVisible(false)}></div>
    <div className="add-to-bag-sidebar">
      <AddToBag cartItems={cartItems} setIsSidebarVisible={setIsSidebarVisible} />
    </div>
  </>
)}




</div>











 <footer id="footer" className="mt-5">
                <div className="container">
                    <div className="row d-flex flex-wrap justify-content-between py-5">
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-menu footer-menu-001">
                                <div className="footer-intro mb-4">
                                    <a href="index.html">
                                        <img src={MainLogo} alt="logo" />
                                    </a>
                                </div>
                                <p>
                                Kaira is a contemporary clothing brand that blends style, comfort, and sophistication to create timeless fashion pieces. Our designs are crafted to empower individuals with a perfect mix of elegance and modern flair.
                                </p>
                                <div className="social-links">
                                    <ul className="list-unstyled d-flex flex-wrap gap-3">
                                        <li>
                                            <a href="#" className="text-secondary">
                                                <svg width={24} height={24} viewBox="0 0 24 24">
                                                    <use xlinkHref="#facebook" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-secondary">
                                                <svg width={24} height={24} viewBox="0 0 24 24">
                                                    <use xlinkHref="#twitter" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-secondary">
                                                <svg width={24} height={24} viewBox="0 0 24 24">
                                                    <use xlinkHref="#youtube" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-secondary">
                                                <svg width={24} height={24} viewBox="0 0 24 24">
                                                    <use xlinkHref="#pinterest" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-secondary">
                                                <svg width={24} height={24} viewBox="0 0 24 24">
                                                    <use xlinkHref="#instagram" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-menu footer-menu-002">
                                <h5 className="widget-title text-uppercase mb-4">Quick Links</h5>
                                <ul className="menu-list list-unstyled text-uppercase border-animation-left fs-6">
                                    <li className="menu-item">
                                        <Link to="/" className="item-anchor">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/about" className="item-anchor">
                                            About
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/shop" className="item-anchor">
                                            PRODUCTS
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/login" className="item-anchor">
                                            Login
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className="item-anchor">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-menu footer-menu-003">
                                <h5 className="widget-title text-uppercase mb-4">
                                    Help &amp; Info
                                </h5>
                                <ul className="menu-list list-unstyled text-uppercase border-animation-left fs-6">                                 
                                    <li className="menu-item">
                                        <a href="#" className="item-anchor">
                                            Contact Us
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className="item-anchor">
                                            Find us easy
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="index.html" className="item-anchor">
                                            Faqs
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-menu footer-menu-004 border-animation-left">
                                <h5 className="widget-title text-uppercase mb-4">Contact Us</h5>
                                <p>
                                    Do you have any questions or suggestions?{" "}
                                    <a href="mailto:contact@yourcompany.com" className="item-anchor">
                                        kaira@gmail.com
                                    </a>
                                </p>
                                <p>
                                    Do you need support? Give us a call.{" "}
                                    <a href="tel:+43 720 11 52 78" className="item-anchor">
                                        +43 720 11 52 78
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-top py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-wrap">
                                <div className="shipping">
                                    <span>We ship with:</span>
                                    <img src={Arct} alt="icon" />
                                    <img src={Logo} alt="icon" />
                                </div>
                                <div className="payment-option">
                                    <span>Payment Option:</span>
                                    <img src={Visa} alt="card" />
                                    <img src={Paypal} alt="card" />
                                    <img src={Master} alt="card" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
      

     
    </div>
  )
}

export default ProductSpecific;
