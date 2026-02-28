import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from './footer';
import logo from '../images/arasulogo.jpeg';

const Layout = () => {
  return (
    <div className="app">
      <header className="header">
        <nav className="navbar container">
          <Link to="" className="logo">
            <img style={{width: '60px'}} src={logo} className="logo" alt="logo" />
            Arasu <span>Flowers</span>
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </nav>
      </header>
      
      <main className="main-content">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
