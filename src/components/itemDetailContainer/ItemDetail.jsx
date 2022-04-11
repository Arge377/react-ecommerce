import React from 'react';
import { Navigate } from 'react-router-dom';
import useCartContext from '../../context/CartContext';
import ItemCount from '../itemCount/ItemCount'

const ItemDetail = ({book}) => {

    const { addItem, isInCart } = useCartContext();

    var sectionStyle = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${book.img})`
    };

    function onAddToCart(count){
        addItem(book, count);
    }

    return (
        <>
            <div className='col-md-12 d-flex justify-content-center mt-5'>
                <div className="card card-detail mb-3">
                    <div className="row card-row g-0">
                        <div className="col-3" style={sectionStyle}></div>
                        <div className="col-9">
                            <div className="card-header detail-header mt-2">
                                <h5 className="card-title">{book.name}</h5>
                                <p className="card-text-autor mt-3">{book.writer}</p>
                            </div>
                            <div className="card-body detail-body">
                                <p className="card-text-description mb-2">{book.description}</p>
                                <h5 className="card-title-price mb-2">Price:  {book.currency}{book.price}</h5>
                                <div>
                                    {   
                                        isInCart(book.id) 
                                        ? (<Navigate to="/cart"/>) 
                                        : (<ItemCount initial={1} stock={book.stock} onAddToCart={onAddToCart}/>)
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