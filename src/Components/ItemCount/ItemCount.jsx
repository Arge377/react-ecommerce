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
  }

  return (
    <>
      <div className="input-group mb-3">
        <button className="btn btn-outline-success" type="button" onClick={decrement}>
          <span className="fa fa-minus"></span>
        </button>
        <input type="number" className="form-control count" value={count} disabled/>
        <button className="btn btn-outline-success" type="button" onClick={increment}>
          <span className="fa fa-plus"></span>
        </button>
      </div>
      <button className="btn btn-outline-success add-btn" onClick={onAdd}>Add to cart</button>
    </>
  )};

export default ItemCount;