// src/App.js
import React, { useState } from 'react';
import './LoginPage.css';
import logo from '../../public/w.png'
import { Link } from 'react-router-dom';
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
        <div className="Login_header">
            
        </div>
      <div className="login-container">
        
          <div>
            <h2>Login</h2>
            <form>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  className='LoginUsernameBox'
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  className='LoginPasswordBox'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button type="button" onClick={() => (NaN)}>
                Login
              </button>
              <Link to = {'/SignUp'} style={{marginTop: '10px', margin: '0px', alignSelf: 'flex-end', cursor: 'pointer', fontSize: '14px', textDecoration: 'none', color: 'inherit'}}>
                <p>SignUp</p>
              </Link>            </form>
          </div>
      </div>
    </div>
  );
}

export default LoginPage;
