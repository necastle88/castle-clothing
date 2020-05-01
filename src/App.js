import React from "react";
import { Switch, Route } from "react-router-dom";

import ShopPage from "./pages/shop/shop";
import HomePage from "./pages/hompage/homepage";
import Header from "./components/header/Header";
import SignInSignOut from "./pages/signIn-signOut/signIn-signOut";
import { auth, createUserProfileDoc } from "./firebase/fireBase.utils";
import "./App.css";

class App extends React.Component {
    state = {
      currentUser: null
    };
  

    unsubscribeFromAuth = null;

    componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDoc(userAuth);
  
          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            }, () => console.log(this.state));
          });
        }
  
        this.setState({ currentUser: userAuth });
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
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInSignOut} />
          </Switch>
        </div>
      );
    }
  }

  export default App;