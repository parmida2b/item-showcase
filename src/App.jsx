// App.jsx

import React from 'react';
import ProductCard from './components/ProductCard/ProductCard'
import './App.css'


const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Iphone 14 promax 256 gig",
    price: 930.90,
    rating: 4.5,
    image: "./public/2d0d36367d682a77f57cd368a185a2f1c80ae2ce(1).png", 
    colors: ["#333", "#eee", "#748ba3"]
  },
  {
    id: 2,
    name: "Blackmagic Design Pocket Cinema Camera 6K Pro (Canon EF)",
    price: 2535.00,
    rating: 4.8,
    image: "./public/da0eb4b48976c397ec43f918ec3c69b360439260.png",
    colors: []
  },
    {
    id: 3,
    name: "SAMSUNG Galaxy S23 Ultra Cell Phone,256 GB",
    price: 1018.00,
    rating: 4.7,
    image: "./public/ffd4890b9f2cc8fe888e1faa56267ddc68972d3d.png",
    colors: ["#EADEE9", "#BCD7FF", "#8B8B8B"]
  },
      {
    id: 4,
    name: "VR VisionTech X1",
    price: 1399.00,
    rating: 3.9,
    image: "./public/2a32add338ec449147e77e734dbb17fc2a9946fa.png",
    colors: ["#B4B4B4"]
  }
];

function App() {
  return (
    <div className="container">
      <h2 className="section-title">New Products</h2>
      <hr className="divider" />
      
      <div className="products-grid">
        {PRODUCTS_DATA.map(item => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;