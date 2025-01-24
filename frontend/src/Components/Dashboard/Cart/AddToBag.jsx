
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Arct from '../../Designing/images/arct-icon.png';
import MainLogo from '../../Designing/images/main-logo.png';
import Visa from '../../Designing/images/visa-card.png';
import Paypal from '../../Designing/images/paypal-card.png';
import Master from '../../Designing/images/master-card.png';
import Logo from '../../Designing/images/dhl-logo.png';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import '../../Designing/css/Bag.css'

const AddToBag = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0); // New state for total amount
  const [isLoading, setIsLoading] = useState(false);
  const userId = sessionStorage.getItem('userId');
  const BASE_URL = process.env.REACT_APP_BACKEND_URL || "https://kaira-clothiing-fash.onrender.com";
  console.log("cart", cart);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!userId) {
          toast.error('Please login to view your cart.');
          return;
        }

        const data = { userId };
        const response = await axios.post(`${BASE_URL}/cart/cartList`, data);

        if (response.data.success && Array.isArray(response.data.data)) {
          const products = response.data.data.map((item) => ({
            productId: item.productId._id,
            title: item.productId.title,
            price: item.productId.price,
            image: item.productId.image,
            quantity: item.quantity,
          }));
          setCart(products);
          console.log(products, "setCart");
        } else if (response.data.success && response.data.data) {
          const product = {
            productId: response.data.data.productId._id,
            title: response.data.data.productId.title,
            price: response.data.data.productId.price,
            image: response.data.data.productId.image,
            quantity: response.data.data.quantity,
          };
          setCart([product]); // Handle a single product object
        } else {
          toast.error(response.data.msg || 'No products in the cart.');
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
        toast.error('Failed to fetch the cart. Please try again.');
      }
    };

    fetchData();
  }, [userId]);

  useEffect(() => {
    // Calculate total whenever the cart changes
    const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cart]); // Recalculate when cart changes

  const updateCartItem = async (action, index) => {
    try {
      const updatedCart = [...cart]; // Clone the cart
      const currentItem = updatedCart[index];

      // Check if the item exists before proceeding
      if (!currentItem) {
        console.error("Item not found at index:", index);
        return;
      }

      let newQuantity = currentItem.quantity || 1;
      newQuantity = action === 'increment' ? newQuantity + 1 : newQuantity - 1;

      // Avoid sending invalid quantities
      if (newQuantity < 0) return;

      const response = await axios.post(`${BASE_URL}/cart/updateCartItem`, {
        userId,
        productId: currentItem.productId,
        quantity: newQuantity,
      });

      if (response.data.success) {
        if (newQuantity === 0) {
          // Remove the item locally if the quantity is 0
          updatedCart.splice(index, 1);
        } else {
          // Update the quantity locally
          updatedCart[index].quantity = newQuantity;
        }

        setCart([...updatedCart]); // Update the local cart state
      } else {
        console.error("Error updating cart item:", response.data.message);
        toast.error("Failed to update the cart item. Please try again.");
      }
    } catch (error) {
      console.error("Error updating cart item:", error);
      toast.error("Failed to update the cart. Please try again.");
    }
  };
  const handleBuyNow = async () => {
    if (cart.length > 0) {
      const totalAmount = calculateTotalAmount(cart); // Calculate total price
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/payment/processing`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: totalAmount,
            currency: 'USD', // Specify the currency
          }),
        });
  
        const data = await response.json();
        if (data.approval_url) {
          // Redirect the user to PayPal's approval page
          window.location.href = data.approval_url;
        } else {
          alert('Payment creation failed');
        }
      } catch (error) {
        console.error('Error initiating PayPal payment:', error);
        alert('Payment initiation failed');
      }
      finally {
        setIsLoading(false); // Reset loading state
      }
    }
  };
  
  // Handle PayPal execution after redirection
  const handlePaymentExecution = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentId = urlParams.get('paymentId');

    if (paymentId) {
        try {
            const response = await fetch(`${BASE_URL}/payment/success`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    paymentId, // Send only the paymentId in the request body
                }),
            });

            const data = await response.json();
            if (data.message === 'Payment executed successfully') {
                // Handle success, show success message
                alert('Payment Successful!');
                // Optionally, clear cart or update order status
            } else {
                alert('Payment not approved!');
            }
        } catch (error) {
            console.error('Error executing PayPal payment:', error);
            alert('Payment execution failed');
        }
    } else {
        alert('Payment failed: Missing paymentId');
    }
};

  useEffect(() => {
    // Check if we are on the success page and handle payment execution
    if (window.location.pathname === '/success') {
      handlePaymentExecution();
    }
  }, []);
  

  // Example function to calculate the total amount based on cart items
  const calculateTotalAmount = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <ToastContainer />
   
<div className="slider-container">
  <div className="slider-content">
    {cart && cart.length > 0 ? (
      <ul className="list-group">
        {cart.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="d-flex align-items-center" style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <img src={item.image} alt={item.title} width="50" className="me-3" />
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '150px' }}>
                {item.title}
              </span>
            </div>
            <div className="d-flex align-items-center ms-3">
              <button
                className="btn btn-outline-secondary me-2 custom-btn-size"
                onClick={() => updateCartItem('decrement', index)}
                style={{ padding: '5px 10px' }}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="btn btn-outline-secondary ms-2 custom-btn-size"
                onClick={() => updateCartItem('increment', index)}
                style={{ padding: '5px 10px' }}
              >
                +
              </button>
            </div>
            <div className="ms-3" style={{ marginTop: '5px' }}>
              <span className="badge bg-primary rounded-pill me-2">${item.price}</span>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-muted">Your cart is empty</p>
    )}

    {cart.length > 0 && (
      <div className="mt-3">
        <div className="total-container" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
          <span className="total-text" style={{ fontSize: '1.25rem' }}>Total:</span>
          <span className="total-amount" style={{ fontSize: '1.25rem' }}>
            ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
          </span>
        </div>
        <button
          onClick={handleBuyNow}
          className="btn btn-primary w-100"
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? (
            <span>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Opening Payment Gateway...
            </span>
          ) : (
            'Buy Now'
          )}
        </button>
      </div>
    )}
  </div>
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
                                   Kaira Clothing is a fashion brand offering a wide range of stylish and high-quality clothing for both men and women. We focus on providing trendy, comfortable, and affordable apparel that suits various occasions, ensuring our customers look and feel their best. At Kaira Clothing, we prioritize excellent customer service, a seamless shopping experience, and a commitment to delivering the latest in fashion.
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
                                        LOGIN
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
                                         Track Your Order
                                       </a>
                                     </li>
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
  );
};

export default AddToBag;
