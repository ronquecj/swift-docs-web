import { Dashboard } from './dashboard/Dashboard';
import './Main.css';

export const Main = () => {
  return (
    <main>
      <h1 className="greetings">Hello -Name-!</h1>
      <Dashboard />
    </main>
  );
};
