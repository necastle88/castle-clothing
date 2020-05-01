import React from "react";
import { Switch, Route } from "react-router-dom";

import ShopPage from "./pages/shop/shop";
import HomePage from "./pages/hompage/homepage";
import Header from "./components/header/Header";
import SignInSignOut from "./pages/signIn-signOut/signIn-signOut";
import { auth } from "./firebase/fireBase.utils";
import "./App.css";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignOut} />
        </Switch>
      </div>
    );
  }
}
export default App;
