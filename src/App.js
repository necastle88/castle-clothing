import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ShopPage from './pages/shop/shop';
import HomePage from './pages/hompage/homepage';
import Header from './components/header/Header';
import SignInSignOut from './pages/signIn-signOut/signIn-signOut';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignOut} />
      </Switch>
    </div>
  );
}

export default App;
