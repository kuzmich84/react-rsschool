import { useContext } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import ThemeContext from './context/themeContext';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} app`}>
      <HomePage />
    </div>
  );
}
export default App;
