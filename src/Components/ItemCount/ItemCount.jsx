import React, {useState} from 'react';
import img from '../../img/Funkos/Todoroki-Funko-372.jpg'

const ItemCount = ({stock, initial, name}) => {
  let [count, setCount] = useState(initial);

  function increment(){
    if(count < stock){
      setCount(count+1);
    }
  }

  function decrement(){
    if(count > 1){
      setCount(count-1);
    }
  }

  function onAdd(){
    window.alert(`Agregaste ${count} ${name} al carrito de compras`);
  }

  return (
    <div className="cardContainer">
      <div className="card">
        <div class="card-header">
          <img src={img} className="card-img-top" alt="..."/>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title ">{name}</h5>
          <div className="card-text">
          <div className="input-group mb-3">
            <button className="btn btn-outline-primary" type="button" onClick={decrement}>
              <span className="fa fa-minus"></span>
              </button>
            <input type="number" className="form-control count" value={count} disabled/>
            <button className="btn btn-outline-primary" type="button" onClick={increment}>
              <span className="fa fa-plus"></span>
            </button>
          </div>
          </div>
          <a className="btn btn-outline-primary add-btn" onClick={onAdd}>Agregar al Carrito</a>
        </div>
      </div>
    </div>
  )};

export default ItemCount;