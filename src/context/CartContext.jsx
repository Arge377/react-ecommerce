import React, { createContext, useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import swal from 'sweetalert';

const CartContext = createContext();

const useCartContext = function(){
    return useContext(CartContext);
}

export const CartContextProvider = ({ children }) => {

    const [itemsInCart, setItemsInCart] = useState([]);

    function addItem(item, quantity){
        setItemsInCart([...itemsInCart, {...item, quantity}]);
        swal({
            title: "Agregado al carrito con Exito!",
            icon: "success"
        });
    }

    function isInCart(id){
        let itemExist = itemsInCart.some((item) => { return item.id === id });
        return itemExist;
    }

    function removeItem(id){
        if(isInCart(id)){
            let item = itemsInCart.find((item) => { return item.id === id });

            swal({
                title: "Estas seguro?",
                text: "Una vez eliminado no podras recuperarlo",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
            .then((willDelete) => {
                if (willDelete){
                    itemsInCart.remove(item);
                    swal(`${item.name} se ha eliminado con exito`, { icon: "success" });

                    if(itemsInCart.length <= 0)
                        <Navigate to="/"/>
                }
            });
        }
    }

    function clearItems(){
        if(itemsInCart.length > 0){
            let items = [];

            swal({
                title: "Estas seguro?",
                text: "Una vez eliminados no podras recuperarlos",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
            .then((willDelete) => {
                if (willDelete){
                    setItemsInCart(items);
                    swal("se han eliminado todos los libros del carrito con exito", { icon: "success" });
                    <Navigate to="/"/>
                }
            });
        }
        else{
            <Navigate to="/"/>
        }
    }

    return(
        <>
            <CartContext.Provider value={ {addItem, isInCart, removeItem, clearItems, itemsInCart} }>
                {children}  
            </CartContext.Provider>
        </>
    )
}

export default useCartContext