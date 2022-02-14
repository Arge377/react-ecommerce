import React from 'react';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({funko}) => {

return (
    <>
        <div className='col-12 d-flex justify-content-center'>         
            <div class="card mb-3">
                <img src={funko.img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{funko.name}</h5>
                    <p class="card-text">{funko.currency} {funko.price}</p>
                </div>
                <div className='card-footer'>
                    <ItemCount initial={1} stock={5}/>
                </div>
            </div>
        </div>
    </>
)};

export default ItemDetail;