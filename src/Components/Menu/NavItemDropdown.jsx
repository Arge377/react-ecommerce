import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../service/firebase';



const NavItemDropdown = ({NavName}) => {
  const [categories, setCategories] = useState([]);

  useEffect( () => {
    let getCategories = getAllCategories()

    getCategories
      .then( (categories) => {
        setCategories(categories);
      })
      .catch( (error) => { console.error(error) });
    },
    []
  );

  return (
    <>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href='/#' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {NavName}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {
              categories.map(category => {
                return <li key={category.id}><Link className="dropdown-item" to={`/categoria/${category.id}`}>{category.name}</Link></li>
              })
            }
          </ul>
        </li>
    </>
  )
}

export default NavItemDropdown