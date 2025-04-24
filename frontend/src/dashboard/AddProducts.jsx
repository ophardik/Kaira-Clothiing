import React, { useState } from 'react';
import axios from 'axios';

const AddProducts = () => {
  const BASE_URL=process.env.REACT_APP_BACKEND_URL||"https://kaira-clothiing-backend-working.onrender.com/"
  // Initialize state for all form fields
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
    category: '',
    is_active: false,
    is_deleted: false,
    variety: '',
    images: [],
    colors: '',
    sizes: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle checkbox changes for is_active and is_deleted
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: checked
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/admin/addProduct`, productData);
      if (response.data.success) {
        alert(response.data.message); // Show success message
        // Reset the form
        setProductData({
          title: '',
          description: '',
          price: '',
          image: '',
          category: '',
          is_active: false,
          is_deleted: false,
          variety: '',
          images: [],
          colors: '',
          sizes: ''
        });
      } else {
        alert('Failed to add product: ' + response.data.msg);
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('An error occurred while adding the product.');
    }
  };

  return (
    <div className="container py-4">
      <h2 className="text-center text-primary mb-4">Add New Product</h2>

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={productData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            rows="3"
            value={productData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            className="form-control"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            className="form-control"
            value={productData.image}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            className="form-control"
            value={productData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="is_active" className="form-label">Is Active</label>
          <input
            type="checkbox"
            id="is_active"
            name="is_active"
            className="form-check-input"
            checked={productData.is_active}
            onChange={handleCheckboxChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="is_deleted" className="form-label">Is Deleted</label>
          <input
            type="checkbox"
            id="is_deleted"
            name="is_deleted"
            className="form-check-input"
            checked={productData.is_deleted}
            onChange={handleCheckboxChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="variety" className="form-label">Variety</label>
          <input
            type="text"
            id="variety"
            name="variety"
            className="form-control"
            value={productData.variety}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="images" className="form-label">Images (URLs, comma-separated)</label>
          <input
            type="text"
            id="images"
            name="images"
            className="form-control"
            value={productData.images.join(', ')}
            onChange={(e) => {
              const imagesArray = e.target.value.split(',').map((image) => image.trim());
              setProductData((prevData) => ({
                ...prevData,
                images: imagesArray
              }));
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="colors" className="form-label">Colors</label>
          <input
            type="text"
            id="colors"
            name="colors"
            className="form-control"
            value={productData.colors}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="sizes" className="form-label">Sizes</label>
          <input
            type="text"
            id="sizes"
            name="sizes"
            className="form-control"
            value={productData.sizes}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default AddProducts;
