import React, {useState} from 'react';

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
    <>
      <div className="input-group mb-3">
        <button className="btn btn-outline-primary" type="button" onClick={decrement}>
          <span className="fa fa-minus"></span>
          </button>
        <input type="number" className="form-control count" value={count} disabled/>
        <button className="btn btn-outline-primary" type="button" onClick={increment}>
          <span className="fa fa-plus"></span>
        </button>
      </div>
      <a href='/#' className="btn btn-outline-primary add-btn" onClick={onAdd}>Agregar al Carrito</a>
    </>
  )};

export default ItemCount;