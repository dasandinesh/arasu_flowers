
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
