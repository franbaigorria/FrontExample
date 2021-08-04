//NavBar
//Renderiza el precio acumulado en el state del reducer.
import React from 'react';
import { useSelector } from 'react-redux';
import './ui.css';

export const NavBar = () => {
  const { price } = useSelector((state) => state.cart);
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
          <span>${price.toFixed(2)}</span>
        </div>
      </nav>
    </div>
  );
};
