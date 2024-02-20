import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <div className='register-container'>
      <div className='card'>
        <div className='left'>
          <h1>Pitch Black</h1>
          <h2>Ignite Your Imagination</h2>
        </div>
        <div className='right'>
          <h1>Register</h1>
          <form>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' placeholder='Username' />

            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Email' />

            <label htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder='Password' />

            <Link to='/login'><button type="submit">Register</button></Link>
          </form>
          <div className="register-login">
            <span>Already have an account?</span>
            <Link to='/login'><button>Login</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
