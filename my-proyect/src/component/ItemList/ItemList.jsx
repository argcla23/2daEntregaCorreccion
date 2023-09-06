import React from "react";
import Item from "../item/item";



const ItemList = ({productos}) =>{

return(


    <div className="d-flex justify-content-evenly flex-wrap"  >
    {productos.map ((prod)=> <Item key={prod.id} prod= {prod}/>)}
    
</div>

)

}

export default ItemList