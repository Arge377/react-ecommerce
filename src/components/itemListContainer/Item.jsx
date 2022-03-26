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
        <div className='col-sm-6 col-md-4 col-lg-3 mb-5 d-flex justify-content-center'>
            {
                book.stock > 0
                ? 
                (
                    <Link to={`/book/${book.id}`} className="card-list-title">
                        <div className="card card-list text-center">
                            <div className="card-body" style={sectionStyle}>  
                            </div>
                            <div className="card-footer d-grid">
                                <p className="card-list-title">{book.name}</p>
                                <p className="card-list-title text-success">En Stock</p>    
                                <p className="card-list-price text-center">${book.price}</p>
                            </div>
                        </div>                   
                    </Link>
                )
                :
                (
                    <div className="card-list-title">
                        <div className="card card-list text-center">
                            <div className="card-body" style={sectionStyle}>  
                            </div>
                            <div className="card-footer d-grid">
                                <p className="card-list-title">{book.name}</p>
                                <p className="card-list-title text-danger">Agotado</p>    
                                <p className="card-list-price text-center">${book.price}</p>
                            </div>
                        </div>                   
                    </div>
                )
            }
        </div>
    </>
  )};

export default Item;
