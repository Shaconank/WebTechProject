// src/App.js
import React, { useState } from 'react';
import './SignUp.css';
import logo from '../../public/w.png'
import { Link } from 'react-router-dom';

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
        <div className="Login_header">
            
        </div>
      <div className="login-container">
        
          <div>
            <h2>Sign-up</h2>
            <form>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  className='SignUpUsernameBox'
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  className='SignUppasswordBox'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <label>
                Repeat Password:
                <input
                  type="Repeat password"
                  value={password}
                  className='repeatPasswordBox'
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </label>
              <button type="button" onClick={() => (NaN)}>
                Sign-Up
              </button>
              <Link to = {'/Login'} style={{marginTop: '10px', margin: '0px', alignSelf: 'flex-end', cursor: 'pointer', fontSize: '14px', textDecoration: 'none', color: 'inherit'}}>
                <p>Login</p>
              </Link>
            </form>
          </div>
      </div>
    </div>
  );
}

export default SignUpPage;
