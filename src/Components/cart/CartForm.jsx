import React, {useState} from 'react';
import useCartContext from '../../context/CartContext';
import { generateOrder } from '../../service/firebase';

const CartForm = () => {
    const { totalPrice, getAllItemsInCart } = useCartContext();

    const [form, setForm] = useState({
        buyer : {
            name: '',
            phone: '',
            email: ''
        }
    })

    function inputHandler(event){
        setForm({
            ...form,
            buyer:{
                ...form.buyer,
                [event.target.name]:event.target.value
            }
        })
    }

    function comprar(event){
        event.preventDefault();
        const price = totalPrice();
        const items = getAllItemsInCart();
        const date = Date();
        const orderData = { form, items, price, date };

        generateOrder(orderData);
    }

    return(
    <>
        <div className='col-md-6 mt-4'>
            <h2 className='text-center'>Datos para finalizar la compra</h2>
            <form>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="name">Nombre</label>
                    <div className="form-group-row">
                        <input type="text" value={form.buyer.name} onChange={(e) => inputHandler(e)} className="form-control" name="name" placeholder="Nombre" required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="email">Email</label>
                    <div className="form-group-row">
                        <input type="email" value={form.buyer.email} onChange={(e) => inputHandler(e)} className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Email" required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="phone">Numero de Telefono</label>
                    <div className="form-group-row">
                        <input type="tel" value={form.buyer.phone} onChange={(e) => inputHandler(e)} className="form-control" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Telefono" required/>
                    </div>
                </div>
                <div className="form-group row mt-4">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-success" onClick={(e) => comprar(e)}>Comprar</button>
                    </div>
                </div>
            </form>
        </div>
    </>
)}

export default CartForm