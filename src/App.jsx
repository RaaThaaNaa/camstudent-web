import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logoImg from './assets/logo.jpg';
import Home from './Home';
import About from './About';
import Activities from './activities';
import Scholarship from './Scholarship';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">        
          <Link to="/" className="logo-link">
            <div className="logo">
              <div className="logo-circle">
                <img src={logoImg} alt="CamStudent Logo" className="logo-img" />
              </div>
              <div className="logo-text">
                <h1>CAMSTUDENT</h1>
                <p>TDTU</p>
              </div>
            </div>
          </Link>

          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/activities">Activities</Link>
            <Link to="/scholarship">Scholarship info</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/scholarship" element={<Scholarship />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;