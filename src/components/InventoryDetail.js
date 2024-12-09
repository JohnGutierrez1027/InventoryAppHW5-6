import React from 'react';
import { useParams, Link } from 'react-router-dom';
import items from '../models/Inventory.json'; // Import inventory data
import ProductDetail from './ProductDetail';

const InventoryDetail = () => {
  const { sku } = useParams();
  const item = items.find(item => item.SKU === sku); // Find the item by SKU

  if (!item) {
    return <p>Item not found</p>; // Return a message if the item is not found
  }

  return (
    <ProductDetail
      SKU={item.SKU}
      name={item.name}
      qty={item.qty}
      price={item.price}
      category={item.category}
      description={item.description}
      image={item.image}
    />
  );
};

export default InventoryDetail;
