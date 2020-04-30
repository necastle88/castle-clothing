import React from 'react';

import { Switch, Route } from 'react-router-dom';

import ShopPage from './pages/shop/shop';
import HomePage from './pages/hompage/homepage';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <div>
    <Header />
      <Switch >
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
      <HomePage />
    </div>
  );
}

export default App;
