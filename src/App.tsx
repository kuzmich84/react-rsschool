import './App.css';
import NotFound from './components/NotFound/NotFound';
import ReactHoookForm from './components/ReactHoookForm/ReactHoookForm';
import Uncontrolled from './components/Uncontrolled/Uncontrolled';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/uncontrolled-form" element={<Uncontrolled />} />
      <Route path="/react-hook-form" element={<ReactHoookForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
