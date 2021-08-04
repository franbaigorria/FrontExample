import React from 'react';
import './ui.css';

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark justify-content-between fixed-top ">
        <div className="navbar-brand">
          <i class="fas fa-gamepad"></i>
        </div>
        <div>
          <span className="mr-5">Home</span>
          <span className="mr-5">Browse</span>
          <i class="fas fa-shopping-cart"> </i>
          Cart
        </div>
      </nav>
    </div>
  );
};
