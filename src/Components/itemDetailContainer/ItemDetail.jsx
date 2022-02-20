import React from 'react';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({book}) => {

var sectionStyle = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${book.img})`
};

return (
    <>
        <div className='col-md-12 d-flex justify-content-center mt-5'>
            <div className="card card-detail mb-3">
                <div className="row card-row g-0">
                    <div className="col-md-3" style={sectionStyle}></div>
                    <div className="col-md-9">
                        <div className="card-header detail-header mt-2">
                            <h5 className="card-title">{book.name}</h5>
                            <p className="card-text-autor mt-2">{book.writer}</p>
                        </div>
                        <div className="card-body detail-body">
                            <p className="card-text-description mb-4">{book.description}</p>
                            <h5 className="card-title-price mb-4">Price:  {book.currency}{book.price}</h5>
                            <div className='mt-2'>
                                <ItemCount initial={1} stock={5}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)};

export default ItemDetail;