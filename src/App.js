import React, {useState, useEffect} from 'react';
import ProductInfo from './ProductInfo';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Container from './Container';

function App() {
  

  return (
    <div className="App">
      <Container>
     <Switch>
       <Route path="/">
     <ProductInfo />
       </Route>
     </Switch>
      </Container>
    </div>
  );
}

export default App;

