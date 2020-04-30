import React from 'react';
import HomePage from './pages/hompage/homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import './App.css';

function App() {
  return (
    <div>
      <Switch >
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
      <HomePage />
    </div>
  );
}

export default App;
