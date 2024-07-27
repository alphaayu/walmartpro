// src/App.js
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import MapVisualization from './components/MapVisualization';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Dashboard />
        <MapVisualization />
      </div>
    </div>
  );
}

export default App;
