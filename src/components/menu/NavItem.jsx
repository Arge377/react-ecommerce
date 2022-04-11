import React from 'react';

const NavItem = ({ClassName, Href, Text}) => {
  return (
    <li className="nav-item">
        <a className={ClassName} href={Href}>                     
            <span className='text-white'>{Text}</span>
        </a>
    </li>
)};

export default NavItem;