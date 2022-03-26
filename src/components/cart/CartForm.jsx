import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import useCartContext from '../../context/CartContext';
import { generateOrder } from '../../service/firebase';
import swal from 'sweetalert';

const CartForm = () => {
    const { totalPrice, getAllItemsInCart, clearItems, setItemsInCart } = useCartContext();
    let navigate = useNavigate();
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

        if(items.length >= 1){
            if(validateForm(form.buyer)){
                let orderId = generateOrder(orderData);
                orderId.then((id) => {
                    setItemsInCart([]);
                    swal({
                        title: "Su orden se ha generado con exito!",
                        icon: "success"
                    });
                    navigate(`/detail/${id}`);
                })
            }
        }
        else{
            swal({
                title: "No posee libros en su carrito de compras!",
                icon: "warning"
            });
        }
    }

    function validateForm(buyer){
        const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
        const validPhone = new RegExp(/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/);
        const validName = new RegExp(/^[a-zA-Z]+$/);

        if(buyer.email === "" || buyer.name === "" || buyer.phone === ""){
            swal({
                title: "Los registros son Obligatorios!",
                icon: "warning"
            });
            return false;
        }

        if(!validName.test(buyer.name)){
            swal({
                title: "El Nombre ingresado es invalido!",
                icon: "warning"
            });
            return false;
        }

        if(!validEmail.test(buyer.email)){
            swal({
                title: "El Email ingresado es invalido!",
                icon: "warning"
            });
            return false;
        }

        if(!validPhone.test(buyer.phone)){
            swal({
                title: "El Numero ingresado es invalido!",
                icon: "warning"
            });
            return false;
        }
        else{
            return true;
        }
    }

    function deleteItems(){
        clearItems();
        navigate("/");
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
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-success" onClick={(e) => comprar(e)}>Comprar</button>
                        <button type="button" className="btn btn-danger" onClick={() => deleteItems()}>Cancelar Compra</button>
                    </div>
                </div>
            </form>
        </div>
    </>
)}

export default CartForm