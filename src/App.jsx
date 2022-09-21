
import './App.css';



import Navbar from './Componentes/NavBar';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import Cart from './Componentes/Cart';
import {BrowserRouter,Routes,Route, Router} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
  <Route path='/' element={<ItemListContainer/>}/>
  <Route path='/categoria/:categoriaid' element={<ItemListContainer/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/detalle' element={<ItemDetailContainer/>}/>
  </Routes>


    <ItemDetailContainer />
    <Cart />
    </BrowserRouter>
    </>
  );
 
}

export default App;
