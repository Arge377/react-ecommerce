import React from 'react';

const NavBrand = ({ImgSrc, Href, Width, Height}) => {
  return (
    <a className="navbar-brand" href={Href}>
      <img src={ImgSrc} alt="" width={Width} height={Height}/>
    </a>
)};

export default NavBrand;
