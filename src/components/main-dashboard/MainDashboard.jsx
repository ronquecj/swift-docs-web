import { Main } from '../main/Main';
import { Navbar } from '../navbar/Navbar';
import './MainDashboard.css';

export const MainDashboard = () => {
  return (
    <div className="app">
      <Navbar />
      <Main />
    </div>
  );
};
