import React from 'react';
import DataGrid, { Column, Button, Editing } from 'devextreme-react/data-grid';
import useCartContext from '../../context/CartContext';
import CartForm from './CartForm';

const Cart = () => {

  const { itemsInCart, removeItem } = useCartContext();

  function calculateTotalValue(item) {
    return `$${item.quantity * item.price}`;
  }

  return (
    <>
      <div className='row justify-content-center'>
        <h1 className='text-center'>Carrito de Compras</h1>
        <div className='col-md-9 mt-4 d-flex text-center justify-content-center'>
          <DataGrid dataSource={itemsInCart} keyExpr="id" showBorders={true}>
            <Editing
              mode="row"
              allowDeleting={true}
            />
            <Column dataField="name" caption="Nombre" dataType="string"/>
            <Column dataField="writer" caption="Autor" dataType="string"/>
            <Column dataField="quantity" caption="Cantidad" dataType="number"/>
            <Column dataField="price" caption="Precio" dataType="number"/>
            <Column caption="Total" dataType="number" calculateCellValue={(e) => calculateTotalValue(e)}/>
            <Column caption="Acciones" type="buttons">
              <Button cssClass="text-warning" icon="fa-solid fa-trash-can" onClick={(e) => removeItem(e.row.data.id)}/>
            </Column>
          </DataGrid>
        </div>
      </div>
      <div className='row justify-content-center'>
        <CartForm/>
      </div>
    </>
  )
}

export default Cart
