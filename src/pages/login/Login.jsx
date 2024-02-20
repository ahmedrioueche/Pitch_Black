import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>Pitch Black</h1>
          <h2>Ignite Your Imagination</h2>
        </div>
        <div className='right'>
          <h1>Login</h1>
          <form>
            <input type='text' placeholder='Username' />
            <input type='password' placeholder='Password' />
            <Link to='/'><button type="submit">Login</button></Link>
          </form>
          <div className="register">
            <span>Don't have an account?</span>
            <Link to='/register'><button>Register</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
