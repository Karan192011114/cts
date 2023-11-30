// Home.js

import React from "react";
import ProductCard from "./ProductCard"; 
import ProductView from "./ProductView";
import shoe from  '../assets/shoe.png';
const Home = () => {
  // Dummy product data (replace with your actual product data)
  const products = [
    { id: 1, name: "Product 1", price: 19.99, image: shoe, description: "Description for Product 1" },
    { id: 2, name: "Product 2", price: 29.99, image: shoe, description: "Description for Product 2" },
    // Add more products as needed
  ];

  return (
    <div className="home">
      <div className="banner">
        {/* Add your banner content here */}
        <h1>Welcome to Dinokart</h1>
      </div>

      <div className="product-list">
        <h2>Featured Products</h2>
        <div className="product-grid" style={{display:"flex", flexDirection:"row" , justifyContent:"center", alignItems:"center"}}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
           
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
