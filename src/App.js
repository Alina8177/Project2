import React, {useState, useEffect} from 'react';
import Product from './Product';
import ProductData from './ProductData'
import './App.css';

function App() {
  
  return (
    <div className="App">
      <ProductData itemData></ProductData>
      <Product productInfo></Product>
    </div>
  );
}

export default App;


