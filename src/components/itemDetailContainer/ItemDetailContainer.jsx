import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from '../loader/Loader';
import { getBookById } from '../../service/firebase';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [books, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    let getBook = getBookById(id);

    getBook
      .then((books) => { 
        setItem(books);
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
        : (<div className='row'><ItemDetail book={books}/></div>)
      }
    </>
  )};

export default ItemDetailContainer; 