import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';


import ShopPage from "./pages/shop/shop";
import HomePage from "./pages/hompage/homepage";
import CheckOutPage from './pages/check-out/checkOutPage';

import Header from "./components/header/Header";
import SignInSignOut from "./pages/signIn-signOut/signIn-signOut";

import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';
 
import "./App.css";

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
      const { checkUserSession } = this.props
      checkUserSession();
    }
   
  
    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }
  
    render() {
      return (
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckOutPage} />
            <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInSignOut />
              )
            }
          />
          </Switch>
        </div>
      );
    }
  }

  const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });

  const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);