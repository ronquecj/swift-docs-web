/* eslint-disable react/prop-types */

import { Dashboard } from './dashboard/Dashboard';
import './Main.css';

export const Main = ({ isOnMobile }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const username = currentUser.user.username

    .split('')
    .map((c, i) => (i == 0 ? c.toUpperCase() : c))
    .join('');

  return (
    <main
      style={isOnMobile ? { padding: '20px', width: '100%' } : {}}
    >
      <h1 className="greetings">Hello {username}!</h1>
      <Dashboard isOnMobile={isOnMobile} />
    </main>
  );
};
