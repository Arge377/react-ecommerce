import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css"
import { Link } from 'react-router-dom';

const NavBrand = () => {
  return (
    <Link className="navbar-brand" to="/">
      <i className="fa-solid fa-book-open"></i>
    </Link>
)};

export default NavBrand;