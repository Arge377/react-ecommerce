import React, {useState, useEffect} from 'react';
import Ashe from '../../img/Funkos/LeagueofLegends/Ashe_Detail.webp';
import ItemDetail from './ItemDetail';

const DbFunko = {
  id : "02",
  name: "Ashe",
  img: Ashe,
  price: 25,
  currency: "$"
}

function Get(){
  return new Promise( (resolve) => { 
    setTimeout( () => { resolve(DbFunko) }, 2000) 
  });
}

const ItemDetailContainer = ({Greeting}) => {

  const [funko, setItem] = useState({});

  useEffect( () => {
    let getFunko = Get();

    getFunko
      .then( (funko) => { setItem(funko) })
      .catch( (error) => { console.error(error) });
    },
    []
  );

  return (
    <>
      <div className='row'>
        <ItemDetail funko={funko}/>
      </div>
    </>
  )};

export default ItemDetailContainer;