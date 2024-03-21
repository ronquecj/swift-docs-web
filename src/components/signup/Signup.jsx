import './Signup.css';
import { Link } from 'react-router-dom';

export const Signup = () => {
  return (
    <div className="login-container">
      <div className="login">
        <div className="lo">
          <img
            src="sign-up-3.png"
            alt=""
            height={'300px'}
            style={{ marginRight: '120px' }}
          />
          <form className="login-form">
            <h1>Sign up</h1>
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="username"
              placeholder="randomuser"
            />
            <label htmlFor="">Password</label>
            <input type="password" name="username" />
            <button>Create account</button>
            <p>
              Already have an account? Login{' '}
              <Link to={'/login'}>
                <span className="l-span">here</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
