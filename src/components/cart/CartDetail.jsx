import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartDetailItem';

const CartDetail = ({items, price, buyer, id}) => {

    return (
        <>
            <div className="container">
                <Link to={`/`} className="btn"><i className="fa-solid fa-circle-arrow-left fs-3 text-dark"></i></Link>
                <div className="row mb-4">
                    <div className="col text-center">
                        <h2>Muchas gracias tu compra {buyer.name}</h2>
                        <h5>
                            El Ticket de tu compra es: <span className='text-info'> {id}</span>
                        </h5>
                        <h5>
                            El total de tu compra es: <span className='text-info'> ${price}</span>
                        </h5>
                    </div>
                </div>
                {
                    items.map( item => {
                        return <CartItem key={item.id} item={item}/>
                    })
                }
            </div>
        </>
    )
}

export default CartDetail 