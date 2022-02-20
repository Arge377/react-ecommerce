import React from 'react';
import Item from './Item';

const ItemList = ({books}) => {
    return (
        <>
            <div className='row'>
                { 
                    books.map( book => { 
                        return <Item key={book.id} book={book} /> 
                    }) 
                }
            </div>
        </> 
    )};
export default ItemList;
