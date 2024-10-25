import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './css/style.css';
import Home from "./Pages/Home";
import Docteurs from "./Pages/Docteurs";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import logo from './logo.svg';
import { GlobalProvider } from './Databases/GlobalContext';

function App(){
  return(
    <div className="App">
        <GlobalProvider>
        <Router>
          <div className='navbar'>
            <a href="/"><img src={logo} alt="logo du site"/></a>
              <nav>
                <ul>
                  <li>
                    <NavLink to="/">Accueil</NavLink>
                  </li>
                  <li>
                    <NavLink to="/docteurs">Docteurs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/services">Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className="btn-contact">Prendre Rdv</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/docteurs" element={<Docteurs/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/contact" element={<Contact/>} />
              </Routes>
        </Router>
        </GlobalProvider>
    </div>
  );
}

export default App;
