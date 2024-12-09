MET CS601:  Module 6 Assignment - JOHN GUTIERREZ

INVENTORY MANAGEMENT APPLICATION

Overview
Trader John's Inventory App is a dynamic inventory management system designed to showcase a market's product catalog. The app enables users to search, filter, and explore detailed product information. Built with React, the app provides an engaging and responsive user experience.

Features
+ Dynamic Product Catalog: Display items with SKU, name, price, quantity, and category.
+ Search and Filter: Quickly find products by name or filter by category.
+ Detailed Product View: Clickable items link to detailed pages with product descriptions and images.
+ Modern Design: Styled with CSS for a polished look and responsive behavior.
+ Interactive Navigation: Smooth navigation using React Router v6.

Technologies Used
+ React: Frontend library for building the UI.
+ React Router v6: For dynamic routing and navigation.
+ JavaScript (ES6+): Core programming language.
+ CSS: Styling and layout design.
+ JSON: Data storage for the inventory.

File Structure

inventory-app/
├── public/
│   ├── background.jpg
│   ├── ciabatta.jpg
│   ├── coldbrew.jpg
│   ├── formaggi.png
│   ├── index.html
│   ├── manchego.png
│   ├── ribeye.png
│   ├── roll.jpg
│   ├── salmon.png
│   ├── rose.png
│   ├── trader-logo.png
├── src/
│   ├── components/
│   │   ├── DisplayItems.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── InventoryDetail.js
│   │   ├── InventoryItem.js
│   │   ├── InventoryList.js
│   │   ├── ProductDetail.js
│   ├── models/
│   │   ├── Inventory.json
│   ├── App.css
│   ├── App.js

Core Application (App.js)
+ Purpose: The main entry point of the application. It sets up routing and manages the global state for filtering and searching items.

+ Key Features:
    * State Management:
        - inventoryList: Contains the inventory data.
        - searchTerm and selectedCategory: Tracks search inputs and selected category filters.
    * Filtering Logic: Filters items based on search terms and category.
    * Routing: Uses React Router to define routes for the home page (/) and item detail pages (/item/:sku).
    * Dependencies: Interacts with DisplayItems, Header, Footer, and InventoryDetail.

Components Overview:

+ DisplayItems.js
    * Purpose: Displays the list of inventory items, with clickable cards leading to detailed views.
    * Features:
        - Uses the Link component to create clickable inventory items.
        - Dynamically renders items using a map function.
        - Handles empty states by displaying a message if no items match the filters.
    * Interaction: Renders items filtered by App.js state.

+ InventoryDetail.js
    * Purpose: Shows detailed information for a single inventory item.
    * Features: 
        - Fetches item data by matching the SKU from the URL parameters.
        - Displays detailed data using the ProductDetail component.
    * Interaction: Uses the useParams hook from React Router to extract and match the SKU.

+ ProductDetail.js
    * Purpose: Displays detailed information about a single product.
    * Features:
        - Renders item attributes (e.g., SKU, category, description, image).
        - Includes a back-to-home navigation button.
    * Interaction: Receives props from InventoryDetail.js.

+ InventoryItem.js
    * Purpose: Represents a single inventory item in the list.
    * Features:
        - Displays basic item details (e.g., name, price, quantity).
        - Uses Link for navigation to the detail view.
    * Interaction: Used by InventoryList or similar components for rendering.

+ InventoryList.js
    * Purpose: Renders a list of InventoryItem components.
    * Features:
        - Handles conditional rendering to display a loading or empty message.
    * Interaction: Designed for modular reusability with any list of inventory items.

+ Header.js
    * Purpose: Displays the application header with branding.
    * Features:
        - Renders a logo (trader-logo.png) and a title ("Trader John's Market").
    * Interaction: Appears at the top of every page, enhancing navigation consistency.

+ Footer.js
    * Purpose: Provides footer navigation and credits.
    * Features:
        - Displays links for "About Us," "Contact," and "Privacy Policy."
        - Renders a copyright message.
    * Interaction: Appears consistently across all routes.

Styling (App.css)
+ Purpose: Defines the visual aesthetics and layout for the application.
+ Key Features:
    * Global Styling: Sets up fonts, backgrounds, and overall structure.
    * Component-Specific Styles:
        - Header and Footer: Sticky positioning for consistent visibility.
        - Filters: Input fields for search and category selection.
        - Inventory Items: Grid layout with hover effects.
    * Product Detail: Centered and styled for a polished look.
+ Responsive Design: Uses media queries to ensure usability on smaller screens.

Data Model (Inventory.json)
+ Purpose: Provides static inventory data for the application.
+ Key Attributes:
    * SKU, name, qty, price, category: Core product details.
    * description: Rich textual information for detailed pages.
    * image: Path to the product image file.

Routing
+ "/": Displays the filtered inventory list (DisplayItems).
+ "/item/:sku": Navigates to a detailed page for a specific product (InventoryDetail).

Strengths
+ Modular Design: Components are reusable, focused, and well-encapsulated.
+ User Experience:
    * Filtering and searching for items is seamless.
    * Details pages provide an enriched experience with product descriptions and images.
+ Scalable Structure: The architecture supports easy expansion, such as adding new pages or functionalities.
+ Responsive Layout: Uses CSS for adaptivity across different screen sizes.
