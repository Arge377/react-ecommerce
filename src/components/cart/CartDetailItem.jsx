import React from 'react'

const CartDetailItem = ({item}) => {
    console.log(item)

    var sectionStyle = {
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${item.img})`
    };

    return (
        <div className="row">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-2" style={sectionStyle}>
                    </div>
                    <div className="col-md-10 text-start">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text">Comprados: {item.quantity}</p>
                            <p className="card-text">Precio: ${item.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartDetailItem