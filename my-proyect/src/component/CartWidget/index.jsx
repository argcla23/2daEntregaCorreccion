import React from "react";
import { useContext } from "react";
import { createBootstrapComponent } from "react-bootstrap/esm/ThemeProvider";
import { CartContext } from "../../context/cartContext";



const CartWidget = () =>{
    const {cartQuantity} = useContext (CartContext)
    return (
<>        
<img src="../public/img/OIP.jpg" alt="cart" width='30 rem'/>
{cartQuantity() >0 &&  <span className="cart">{cartQuantity()}</span>}
</>
    );
}

export default CartWidget