import './App.css';
import Navbar from './Components/Menu/Navbar'
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer Greeting={"Lista de Compras"}/>
      <ItemCount stock={10} initial={1} name="Funko 372 Todoroki"/>
    </>
  );
}

export default App;