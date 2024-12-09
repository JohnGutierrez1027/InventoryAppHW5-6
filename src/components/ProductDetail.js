import React from 'react';
import { Link } from 'react-router-dom'; // Link to navigate back to the home page

const ProductDetail = ({ SKU, name, qty, price, category, description, image }) => {
  return (
    <div className="product-detail">
      <h1>{name}</h1>
      <p>{description}</p>
      <img 
        src={`${process.env.PUBLIC_URL}/${image}`} // Correct path for public images
        alt={name} 
        className="product-image" 
      />
      <p><strong>SKU:</strong> {SKU}</p>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Quantity:</strong> {qty}</p>
      <p><strong>Price:</strong> ${price.toFixed(2)}</p>
      
      <Link to="/" className="back-link">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default ProductDetail;
