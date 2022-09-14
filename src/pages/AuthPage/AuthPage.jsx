import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <main className='AuthPage'>
      <h1 className='signin'>Welcome to Jess Bakes! <br />
        Sign up or log in to get started! </h1>
      { showLogin ?
          <LoginForm setUser={setUser} />
          :
          <SignUpForm setUser={setUser} />
      }
      <button onClick={() => setShowLogin(!showLogin)}>
      {showLogin ? 'Sign Up' : 'Log In'}
      </button>
    </main>
  );
}