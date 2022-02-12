import './App.css';
import ItemListContainer from './Components/itemListContainer/ItemListContainer';
import Navbar from './Components/Menu/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer Greeting={"Lista de Compras"}></ItemListContainer>
    </>
  );
}

export default App;