import React, {useState, useEffect} from 'react';

import Amumu from '../../img/Funkos/LeagueofLegends/amumu-01.jpg';
import Ashe from '../../img/Funkos/LeagueofLegends/ashe-02.jpg';
import LeeSin from '../../img/Funkos/LeagueofLegends/leesin-03.jpg';
import Braum from '../../img/Funkos/LeagueofLegends/braum-04.jpg';
import Jinx from '../../img/Funkos/LeagueofLegends/jinx-05.jpg';
import Vi from '../../img/Funkos/LeagueofLegends/vi-06.jpg';
import Thresh from '../../img/Funkos/LeagueofLegends/thresh-07.jpg';
import MissFortune from '../../img/Funkos/LeagueofLegends/missFortune-09.jpg';

import ItemList from './ItemList';

const DbFunkos = [
  {
    id : "01",
    name: "Amumu",
    img: Amumu,
    price: 30,
    currency: "$"
  },
  {
    id : "02",
    name: "Ashe",
    img: Ashe,
    price: 25,
    currency: "$"
  },
  {
    id : "03",
    name: "LeeSin",
    img: LeeSin,
    price: 30,
    currency: "$"
  },
  {
    id : "04",
    name: "Braum",
    img: Braum,
    price: 30,
    currency: "$"
  },
  {
    id : "05",
    name: "Jinx",
    img: Jinx,
    price: 25,
    currency: "$"
  },
  {
    id : "06",
    name: "Vi",
    img: Vi,
    price: 30,
    currency: "$"
  },
  {
    id : "07",
    name: "Thresh",
    img: Thresh,
    price: 30,
    currency: "$"
  },
  {
    id : "09",
    name: "Miss Fortune",
    img: MissFortune,
    price: 30,
    currency: "$"
  },
]

function GetAll(){
  return new Promise( (resolve) => { 
    setTimeout( () => { resolve(DbFunkos) }, 2000) 
  });
}

const ItemListContainer = ({Greeting}) => {

  const [funkos, setItems] = useState([]);

  useEffect( () => {
    let getAllFunkos = GetAll();

    getAllFunkos
      .then( (funkos) => { setItems(funkos) })
      .catch( (error) => { console.error(error) });
    },
    []
  );

  return (
    <>
      <ItemList funkos={funkos}/>
    </>
  )};

export default ItemListContainer;