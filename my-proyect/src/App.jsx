import NavBar from './component/NavBar'
import ItemListContainer from './component/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/cartContext'
import Cart from './component/cart/cart'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={
      <ItemListContainer
        texto="Bienvenido amante del automotor"/>
      }/>
      <Route path='/categoria/:categoriaID' element={<ItemListContainer
        texto="Tu Seleccion"/>}/>
      <Route path='/item/:id' element ={<ItemDetailContainer/>}/>
       <Route path='/cart' element={<Cart/>}/>


      </Routes>
      
      </BrowserRouter>
      </CartProvider>
      )
}

export default App