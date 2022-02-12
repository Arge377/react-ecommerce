import React from 'react';
import Item from './Item';

const ItemList = ({funkos}) => {
    return (
        <>
            <div className='row'>
                { 
                    funkos.map( funko => { 
                        return <Item key={funko.id} funko={funko} /> 
                    }) 
                }
            </div>
        </> 
    )};
export default ItemList;
