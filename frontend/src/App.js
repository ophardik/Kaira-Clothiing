import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './Components/Designing/css/style.css'
// import './Components/Designing/css/ajax-loader.gif'
import './Components/Designing/css/swiper-bundle.min.css'
// import './Components/Designing/css/vendor.css'
import './Components/Designing/css/normalize.css'
import Shop from './Components/Dashboard/Pages/Shop.jsx'
import Home from './Components/Dashboard/Pages/Home.jsx';
import Product from './Components/Dashboard/Pages/Product.jsx';
import Blog from './Components/Dashboard/Pages/Blog.jsx';
import About from './Components/Dashboard/Pages/About.jsx';
import Men from './Components/Dashboard/Shops/Men.jsx';
import Women from './Components/Dashboard/Shops/Women.jsx';
import ProductSpecific from './Components/Dashboard/Shops/ProductSpecific.jsx';
import DetailProduct from './Components/Dashboard/Shops/DetailProduct.jsx';
import Login from './Components/Authentication/Login.jsx';
import Signup from './Components/Authentication/Signup.jsx';
import AddToBag from './Components/Dashboard/Cart/AddToBag.jsx';
import Success from './Components/Payment/Success.jsx';
import Failure from './Components/Payment/Failure.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
import AllUsers from './dashboard/AllUsers.jsx';
import AllProducts from './dashboard/AllProducts.jsx';
import AddProducts from './dashboard/AddProducts.jsx';
import AdminProtectedRoute from './dashboard/ProtectedRoute.jsx';
import AdminLogin from './dashboard/Login.jsx';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/products" element={<Product />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/product/:gender/:variety" element={<DetailProduct />} />
      <Route path="/product/singleProduct/:productId" element={<ProductSpecific />} />
      <Route path="/cart" element={<AddToBag />} />
      <Route path="/success" element={<Success />} />
      <Route path="/failure" element={<Failure />} />
      <Route path="/admin/dashboard" element={
  <AdminProtectedRoute>
    <Dashboard />
  </AdminProtectedRoute>
} />      <Route path="/admin/usersList" element={<AllUsers />} />
      <Route path="/admin/allProducts" element={<AllProducts />} />
      <Route path="/admin/addProducts" element={<AddProducts />} />
      <Route path="/admin/login" element={<AdminLogin />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
