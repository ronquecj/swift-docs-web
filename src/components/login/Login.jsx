import './Login.css';
import { Link } from 'react-router-dom';

import axios from '../../api/axios.js';
import { useState } from 'react';
const LOGIN_URL = 'auth/admin/login';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, {
        username,
        password,
      });

      console.log(response?.data);
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };
  return (
    <div className="login-container">
      <div className="login">
        <div className="lo">
          <img src="cherry-681.png" alt="" />
          <form className="login-form" onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="randomuser"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="username"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Login</button>
            <p>
              {`Don't`} have an account yet? Sign up{' '}
              <Link to={'/signup'}>
                <span className="l-span">here</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
