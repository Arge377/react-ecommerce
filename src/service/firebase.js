// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvsvjAorOWaS9f1Py15Xr_B_bPzAhS3rM",
  authDomain: "ecommerce-libreria.firebaseapp.com",
  projectId: "ecommerce-libreria",
  storageBucket: "ecommerce-libreria.appspot.com",
  messagingSenderId: "465310078608",
  appId: "1:465310078608:web:f14e5e8f24d368d2b06a15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

export async function getAllBooks(){
  try {
    const booksCollection = collection(db, "books");
    const books = await getDocs(booksCollection);
    const result = books.docs.map(book =>{
      return {...book.data(), id: book.id}
    });
    return result;
  } 
  catch (error) {
    console.log(error);
  }
}

export async function getAllCategories(){
  try {
    const categoriesCollection = collection(db, "categories");
    const categories = await getDocs(categoriesCollection);
    const result = categories.docs.map(category =>{
      return {...category.data(), id: category.id}
    });
    return result;
  } 
  catch (error) {
    console.log(error);
  }
}

export async function getBooksByCategory(category){
  try {
    const booksCollection = collection(db, "books");
    const booksByCategory = query(booksCollection, where("category", "==", category));
    const booksFiltered = await getDocs(booksByCategory);

    const result = booksFiltered.docs.map(book =>{
      return {...book.data(), id: book.id}
    });
    return result;
  }
  catch (error) {
    console.log(error);
  }
}

export async function getBookById(id){
  try {
    const document = doc(db, "books", id);
    const dbBook = await getDoc(document);
    const book = {...dbBook.data(), id: dbBook.id}
    return book;
  } 
  catch (error) {
    
  }
}