import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default App;
