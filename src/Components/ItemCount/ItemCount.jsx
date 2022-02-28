import React, {useState} from 'react';

const ItemCount = ({stock, initial, onAddToCart}) => {
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

  return (
    <>
      <p className="card-text-autor mt-2">Disponibles: {stock}</p>
      <div className="input-group mb-3">
        <button className="btn btn-outline-success" type="button" onClick={decrement}>
          <span className="fa fa-minus"></span>
        </button>
        <input type="number" className="form-control count" value={count} disabled/>
        <button className="btn btn-outline-success" type="button" onClick={increment}>
          <span className="fa fa-plus"></span>
        </button>
      </div>
      <button className="btn btn-outline-success add-btn mb-4" onClick={() => onAddToCart(count)}>Añadir al carrito</button>
    </>
  )};

export default ItemCount;