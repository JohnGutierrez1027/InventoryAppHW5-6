import React from 'react';
import { Link } from 'react-router-dom'; // Link to product detail page


const InventoryItem = ({ SKU, name, qty, price, category }) => {
  return (
    <Link to={`/item/${SKU}`} className="details-link">
      <div className="inventory-item">
        
        <h3>{name}</h3>
        <p><strong>SKU:</strong> {SKU}</p>
        <p><strong>Category:</strong> {category}</p>
        <p><strong>Quantity:</strong> {qty}</p>
        <p><strong>Price:</strong> ${price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default InventoryItem;

