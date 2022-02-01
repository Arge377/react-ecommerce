import React from 'react';

const NavItem = ({ClassName, Href, Text}) => {
  return (
    <li className="nav-item">
        <a className={ClassName} aria-current="page" href={Href}>                     
            <span>{Text}</span>
        </a>
    </li>
)};

export default NavItem;
