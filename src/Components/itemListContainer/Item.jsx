import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({book}) => {

var sectionStyle = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${book.img})`
};

  return (
    <>
        <div className='col-md-2 mb-5 d-flex justify-content-center'>
            <div className="card card-list text-center">
                <div className="card-body" style={sectionStyle}>  
                </div>
                <div className="card-footer d-grid">
                    <p className="card-list-title">{book.name}</p>           
                    <p className="card-list-price text-center">{book.currency}{book.price}</p>
                    <Link to={`/book/${book.id}`} className="btn btn-outline-success">Detail</Link>
                </div>
            </div>
        </div>
    </>
  )};

export default Item;
