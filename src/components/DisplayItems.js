import React from 'react';
import { Link } from 'react-router-dom';

const DisplayItems = ({ items, categories, onSearchChange, onCategoryChange }) => {
  return (
    <div className="display-items">
      {/* Items List */}
      <div className="item-list">
        {items.length > 0 ? (
          items.map((item) => (
            <Link 
              to={`/item/${item.SKU}`} 
              key={item.SKU} 
              className="item-card-link"
            >
              <div className="item-card">
                <div className="item-info">
                  <p><strong>SKU:</strong> {item.SKU}</p>
                  <p><strong>Category:</strong> {item.category}</p>
                  <p><strong>Name:</strong> {item.name}</p>
                  <p><strong>Qty:</strong> {item.qty}</p>
                  <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="no-items-message">No items found.</p>
        )}
      </div>
    </div>
  );
};

export default DisplayItems;
