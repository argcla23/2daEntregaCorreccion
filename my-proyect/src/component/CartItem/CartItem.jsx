import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CartItem = ({item}) => {
   const{deleteItem}= useContext(CartContext)
   
    return(
    <div className="d-flex justify-content-around align-items-center">
       <img src={item.img} alt={item.name} width='150rem'  />
        <p>{item.name}</p>
        <p>${item.precio}</p>
        <p>{item.quantity}</p>
        <p> Sub total: $ {item.quantity*item.precio} </p>
        <button className="btn btn-danger" onClick={()=>deleteItem(item.id)}>eliminar</button>

    </div>
    )
}

export default CartItem 