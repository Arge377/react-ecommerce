import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../loader/Loader';
import { getAllBooks, getBooksByCategory } from '../../service/firebase';

const ItemListContainer = ({Greeting}) => {

  let { category } = useParams();

  const [books, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    let getBooks = category ? getBooksByCategory(category) : getAllBooks();

    getBooks
      .then( (books) => {
        setItems(books);
        setIsLoading(false);
      })
      .catch( (error) => { console.error(error) });
    },
    [category]
  );

  return (
    <>
      {
        isLoading
        ? (<Loader/>)
        :  <ItemList books={books}/> 
      }
    </>
  )};

export default ItemListContainer;