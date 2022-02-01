import './App.css';
import Navbar from './Components/Menu/Navbar'
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer Greeting={"Lista de Compras"}/>
    </>
  );
}

export default App;