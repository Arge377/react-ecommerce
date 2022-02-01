import React from 'react';

export const CartWidget = ({Icon, Href, Width, Height}) => {
  return (
    <div className="d-flex">
      <a className="shopIcon" href={Href}>
        <img src={Icon} alt="" width={Width} height={Height}/>
      </a>
    </div>
)};

export default CartWidget;