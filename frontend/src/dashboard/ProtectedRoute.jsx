import React from "react";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("adminLoggedIn");
  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default AdminProtectedRoute;
