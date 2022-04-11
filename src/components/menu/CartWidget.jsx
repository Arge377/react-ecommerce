import React from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../../context/CartContext';

export const CartWidget = () => {

  const { countItemsInCart } = useCartContext();

  return (
    <div className="d-flex">
      <Link className="shopIcon" to='/cart'>
        <i className="fa-solid fa-cart-shopping">
          {
            countItemsInCart() > 0 && <span className='p-2'>{countItemsInCart()}</span>
          }
        </i>
      </Link>
    </div>
)};

export default CartWidget; 