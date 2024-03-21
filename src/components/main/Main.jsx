import { Dashboard } from './dashboard/Dashboard';
import './Main.css';

export const Main = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const username = currentUser.user.username

    .split('')
    .map((c, i) => (i == 0 ? c.toUpperCase() : c))
    .join('');

  return (
    <main>
      <h1 className="greetings">Hello {username}!</h1>
      <Dashboard />
    </main>
  );
};
