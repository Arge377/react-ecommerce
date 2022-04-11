import React, {useState, useEffect} from 'react';
import Loader from '../loader/Loader';
import CartDetail from './CartDetail';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../service/firebase';

const CartDetailContainer = () => {

    let { id } = useParams();

    const [buyer, setBuyer] = useState({});
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    useEffect( () => {
        let getOrder = getOrderById(id);

        getOrder
          .then((order) => { 
            setBuyer(order.form.buyer);
            setItems(order.items);
            setTotalPrice(Number(order.price));
            setIsLoading(false);
          })
          .catch( (error) => { 
            console.error(error) 
          });
        },
        [id]
    );

    return (
        <>
            {
                isLoading
                ? (<Loader/>)
                :  <CartDetail items={items} price={totalPrice} id={id} buyer={buyer}/> 
            }
        </>
    )
}

export default CartDetailContainer 