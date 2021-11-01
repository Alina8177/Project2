import React, {useState, useEffect} from 'react';
import ProductInfo from './ProductInfo';
import ProductData from './ProductData'
import './App.css';

function App() {
  

  return (
    <div className="App">
     <ProductData></ProductData>
     <ProductInfo></ProductInfo>
    </div>
  );
}

export default App;

