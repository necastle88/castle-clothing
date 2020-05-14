import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import ShopPage from "./pages/shop/shop";
import HomePage from "./pages/hompage/homepage";
import Header from "./components/header/Header";
import SignInSignOut from "./pages/signIn-signOut/signIn-signOut";
import { auth, createUserProfileDoc } from "./firebase/fireBase.utils";
import "./App.css";

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
      const { setCurrentUser } = this.props;

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDoc(userAuth);
  
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
          });
        }
  
        setCurrentUser(userAuth);
      });
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

  const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
  });

  const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);