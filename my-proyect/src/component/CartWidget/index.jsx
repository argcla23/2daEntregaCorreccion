import React from "react";

const CartWidget = () =>{
    const cart =5
    return (
        <div>
<i className="bi bi-cart-check"></i>
<span className="cart">{cart}</span>
</div>
    );
}

export default CartWidget