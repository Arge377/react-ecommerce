import React from 'react'
import ItemListContainer from '../Components/itemListContainer/ItemListContainer';
import ItemDetailContainer from '../Components/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from '../Components/Menu/Navbar';

const Rutas = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer Greeting={'Bienvenidos a nuestra Tienda'}/>}/>
        <Route path="/categoria/:category" element={<ItemListContainer Greeting={'Bienvenidos a nuestra Tienda'}/>}/>
        <Route path="/book/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Rutas