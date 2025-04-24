import React, { useEffect, useState } from "react";
import axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  // Fetch all products from API
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8008/admin/productList");
      setProducts(response.data.data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const handleDelete = async (_id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this product?");
      if (!confirmDelete) return;
  
      const response = await axios.delete("http://localhost:8008/admin/deleteProduct", {
        data: { _id }
      });
  
      if (response.data.status) {
        alert(response.data.message);
        setProducts((prev) => prev.filter((p) => p._id !== _id));
      } else {
        alert(response.data.message || "Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Something went wrong while deleting.");
    }
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container py-4">
      <div className="bg-white p-4 rounded shadow-sm">
        <h2 className="text-center text-success mb-4">All Products</h2>

        {products.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map((product) => (
              <div key={product._id} className="col">
                <div className="card h-100 shadow-sm">
                <img
  src={product.image}
  className="card-img-top"
  alt={product.title}
  style={{ height: "250px", width: "100%", objectFit: "contain" }} // <-- Changed to contain
/>

                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-muted" style={{ fontSize: "14px" }}>
                      {product.description.substring(0, 80)}...
                    </p>
                    <p className="mb-1"><strong>Price:</strong> ${product.price}</p>
                    <p className="mb-1"><strong>Category:</strong> {product.category}</p>
                    <p className="mb-1"><strong>Colors:</strong> {product.colors}</p>
                    <p className="mb-1">
  <strong>Sizes:</strong>{" "}
  {product.sizes.map((size, index) => (
    <span key={index}>
      {size}{index < product.sizes.length - 1 ? ", " : ""}
    </span>
  ))}
</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    {/* <button className="btn btn-sm btn-outline-primary">Edit</button> */}
                    <button
  className="btn btn-sm btn-outline-danger"
  onClick={() => handleDelete(product._id)}
>
  Delete
</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
