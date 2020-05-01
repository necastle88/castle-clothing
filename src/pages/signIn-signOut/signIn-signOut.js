import React from 'react'
import './signIn-signOut.scss';
import SignIn from './../../components/sign-in/signIn';
import SignUp from './../../components/sign-up/signUp';


const SignInSignOut = () => (
  <div className='sign-in-sign-out'>
  <SignIn />
  <SignUp />
  </div>
);

export default SignInSignOut;