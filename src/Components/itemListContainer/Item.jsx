import React from 'react';

const Item = ({funko}) => {

  return (
    <>
        <div className='col-md-3 mb-5 d-flex justify-content-center'>
            <div className="card text-center">
                <div className="card-header">
                    <h6 className="card-title">{funko.name} - {funko.id}</h6>
                </div>
                <div className="card-body">
                    <img className='mt-2 card-img card-img-top' src={funko.img} alt="" />             
                    <p className="card-text text-center mt-2">{funko.currency}{funko.price}</p>
                </div>
                <div className="card-footer text-muted d-grid gap-2">
                    <a href="/#" className="btn btn-outline-success">Detail</a>
                </div>
            </div>
        </div>
    </>
  )};

export default Item;
