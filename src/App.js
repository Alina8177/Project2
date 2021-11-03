import React, {useState, useEffect} from 'react';
import ProductInfo from './components/ProductList';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Container from './components/Container';
import SingleShoeItem from './components/SingleShoeItem';

function App() {
  

  return (
    <div className="App">
      <Container>
     <Switch>
       <Route path="/" exact>
     <ProductInfo />
       </Route>
       <Route path={`/shoe/:id`}>
          <SingleShoeItem />
       </Route>
     </Switch>
      </Container>
    </div>
  );
}

export default App;

