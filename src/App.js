import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes
import DisplayItems from './components/DisplayItems';
import Header from './components/Header';
import Footer from './components/Footer';
import InventoryDetail from './components/InventoryDetail'; // Import the InventoryDetail page
import items from './models/Inventory.json'; // Import the inventory data

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventoryList: items, // Initialize with all items
      searchTerm: '', // Search input value
      selectedCategory: '', // Category filter value
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleCategoryChange = (event) => {
    this.setState({ selectedCategory: event.target.value });
  };

  getFilteredItems = () => {
    const { searchTerm, selectedCategory, inventoryList } = this.state;
    return inventoryList.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  };

  render() {
    const categories = [...new Set(items.map(item => item.category))]; // Get unique categories

    return (
      <Router> {/* Wrapping the entire app with Router */}
        <div className="App">
          <Header />

          <main className="App-main">
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    {/* Show search and category filter only on the home page */}
                    <div className="filters">
                      <input
                        type="text"
                        placeholder="Search items"
                        value={this.state.searchTerm}
                        onChange={this.handleSearchChange}
                      />
                      <select value={this.state.selectedCategory} onChange={this.handleCategoryChange}>
                        <option value="">All Categories</option>
                        {categories.map((category, index) => (
                          <option key={index} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <DisplayItems 
                      items={this.getFilteredItems()} 
                      categories={categories} 
                      onSearchChange={this.handleSearchChange} 
                      onCategoryChange={this.handleCategoryChange} 
                    />
                  </>
                } 
              />
              <Route 
                path="/item/:sku" 
                element={<InventoryDetail />} 
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
