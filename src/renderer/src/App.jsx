import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Index from './components/pages/Index';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/:mode/index' element={<Index />} />
        </Routes>
      
    </div>
  )
}

export default App
