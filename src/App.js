import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
  </BrowserRouter> 

  );
}

export default App;
