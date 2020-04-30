import React, { useState } from 'react';
import FormInput from './../../components/form-input/fromInput';
import CustomButton from './../custom-button/customButton';
import './signIn.scss';

const SignIn = () => {
  const [credentials, setCredentials] = useState(
    {
      email: '',
      password: ''
    }
  )

  const handleSubmit = (e) => {
    e.prevent.default();
    setCredentials({
      email: '',
      password: ''
    })
  }

  const handleChange = (e) => {
    const { value, name } = e.target;

    setCredentials({ [name]: value })
  }

  const { email, password } = credentials

  return(
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with you email and passord</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          name='email' 
          type='email' 
          value={email} 
          handleChange={handleChange}
          label='email'
          required />
        <FormInput 
          name='password' 
          type='password' 
          value={email} 
          handleChange={handleChange}
          label='password' 
          required 
          />
        <CustomButton type='submit'>Sign in</CustomButton>
      </form>
    </div>
  )
}

export default SignIn;