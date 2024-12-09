import React from 'react';
import InventoryItem from './InventoryItem';

// Functional component that displays a list of inventory items
const InventoryList = ({ items }) => {
  return (
    <div className="inventory-list">
      {items.length === 0 ? (
        <p>Loading inventory...</p>
      ) : (
        items.map(item => (
          <InventoryItem 
            key={item.SKU} 
            SKU={item.SKU} 
            name={item.name} 
            qty={item.qty} 
            price={item.price} 
            category={item.category}
          />
        ))
      )}
    </div>
  );
};

export default InventoryList;
