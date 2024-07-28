import { useContext } from 'react';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import ThemeContext from './context/themeContext';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} app`}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page/:pageId" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
