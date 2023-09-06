import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import CartItem from "../CartItem/CartItem";


const Cart =() => {
    const{ cart , clear, total}= useContext(CartContext)

    
    return (

        <div>
            {cart.length
            ?
            <div>
                {cart.map((item)=><CartItem key={item.id } item={item} />)}
                <p>Total a pagar :${total()} </p>
            <div>
            <button className='btn btn-danger' onClick={clear}>Vaciar Carrito</button>
            <Link className="btn btn-dark" onClick={mostrar}> Terminar compra</Link>
            </div>
            </div>
            : <div>
                <h3>Tu Carrito esta vacio!</h3>
                <Link to='/' className = 'btn'>Ir a Comprar</Link>
            </div>}
        </div>
    )}

    export default Cart