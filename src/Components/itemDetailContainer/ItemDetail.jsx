import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({book}) => {

    let [isInCart, setisInCart] = useState(false);

    var sectionStyle = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${book.img})`
    };

    function onAddToCart(count){
        setisInCart(true);
    }

    return (
        <>
            <div className='col-md-12 d-flex justify-content-center mt-5'>
                <div className="card card-detail mb-3">
                    <div className="row card-row g-0">
                        <div className="col-md-3" style={sectionStyle}></div>
                        <div className="col-md-9">
                            <div className="card-header detail-header mt-2">
                                <h5 className="card-title">{book.name}</h5>
                                <p className="card-text-autor mt-3">{book.writer}</p>
                            </div>
                            <div className="card-body detail-body">
                                <p className="card-text-description mb-4">{book.description}</p>
                                <h5 className="card-title-price mb-4">Price:  {book.currency}{book.price}</h5>
                                <div className='mt-2'>
                                    {   
                                        isInCart 
                                        ? (<div className="d-grid gap-2"><Link to="/cart" className="btn btn-outline-success btn-lg mt-5">Comprar</Link></div>) 
                                        : (<ItemCount initial={1} stock={5} onAddToCart={onAddToCart}/>)
                                    }                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )};

export default ItemDetail;