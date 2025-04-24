// Dashboard.jsx
import React from "react";
import { Link, useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLogout = () => {
    // Clear any authentication data, for example from localStorage
    localStorage.removeItem("adminLoggedIn");

    // Redirect to login page
    navigate("/admin/login"); // Redirect to the admin login page
  };
  return (
    <div className="container-fluid min-vh-100 bg-light">
      <div className="row">
        {/* Sidebar */}
        <nav className="col-md-3 col-lg-2 d-md-block bg-white sidebar shadow-sm p-3">
          <h2 className="h4 text-primary fw-bold mb-4">Admin Panel</h2>
          <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-dark"
            href="#"
            id="productsDropdown"
            role="button"
            data-bs-toggle="dropdown" // Bootstrap handles the dropdown toggling
            aria-expanded="false" // Initially false until dropdown is opened
          >
            Products
          </a>
          <ul className="dropdown-menu border-0 shadow-sm ms-3" aria-labelledby="productsDropdown">
            <li><Link to="/admin/addProducts" className="dropdown-item">Add Product</Link></li>
            <li><Link to="/admin/allProducts" className="dropdown-item">All Products</Link></li>
          </ul>
  </li>

  {/* Other links */}
  <li className="nav-item">
    <Link to='/admin/usersList' className="nav-link text-dark">All Users</Link>
  </li>

  <li className="nav-item">
  <a className="nav-link text-dark" href="#" onClick={handleLogout}>Logout</a>  </li>
</ul>

        </nav>

        {/* Main content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="btn btn-outline-secondary">Hello, Hardik</div>
          </div>

          {/* Summary cards */}
          <div className="row mb-4">
            <div className="col-md-3 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-muted">Total Users</h5>
                  <h3>1,245</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-muted">Sales</h5>
                  <h3>$12,340</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-muted">Orders</h5>
                  <h3>320</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-muted">Visitors</h5>
                  <h3>4,580</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder for Chart or Data Table */}
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Monthly Stats (Coming Soon)</h5>
              <div className="text-muted">Chart component can be placed here</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
