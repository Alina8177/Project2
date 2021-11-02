import React, {useState, useEffect} from 'react';
import ProductInfo from './ProductInfo';
import { Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  

  return (
    <div className="App">
     <Switch>
       <Route path="/">
     <ProductInfo />
       </Route>
     </Switch>
    </div>
  );
}

export default App;

