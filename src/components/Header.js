import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Lunastra.</div>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Inventory</li>
          <li>Supplier</li>
          <li>Order</li>
          <li>Forecasting</li>
          <li>Tracking</li>
          <li>Analytics</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
