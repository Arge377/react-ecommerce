import React from 'react';
import { Link } from 'react-router-dom';

const categories = {
  infantil: 'Infantil',
  fantasia: 'Fantasia',
  accion: 'Accion'
}

const NavItemDropdown = ({NavName}) => {
  return (
    <>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href='/#' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {NavName}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="dropdown-item" to={`/categoria/${categories.fantasia}`}>{categories.fantasia}</Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/categoria/${categories.infantil}`}>{categories.infantil}</Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/categoria/${categories.accion}`}>{categories.accion}</Link>
            </li>
          </ul>
        </li>
    </>
  )
}

export default NavItemDropdown