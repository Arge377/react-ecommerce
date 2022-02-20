import React from 'react';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
  return (
    <div className="d-flex">
      <Link className="shopIcon" to='/cart'>
        <i className="fa-solid fa-cart-shopping"></i>
      </Link>
    </div>
)};

export default CartWidget;