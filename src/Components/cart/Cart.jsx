import React from 'react';
import DataGrid, { Column, Button, Editing } from 'devextreme-react/data-grid';
import useCartContext from '../../context/CartContext';

const Cart = () => {

  const { itemsInCart, removeItem, clearItems } = useCartContext();

  function calculateTotalValue(item) {
    return `$${item.quantity * item.price}`;
  }

  function payment(item){
    window.alert(`pagaste con exito ${item.name}`);
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
              <Button cssClass="text-warning" icon="fa-solid fa-eraser" onClick={(e) => removeItem(e.row.data.id)}/>
              <Button cssClass="text-danger" icon="fa-solid fa-trash-can" onClick={() => clearItems()}/>
              <Button cssClass="text-success" icon="fa-solid fa-credit-card" onClick={(e) => payment(e.row.data)}/>
            </Column>
          </DataGrid>
        </div>
      </div>
    </>
  )
}

export default Cart
