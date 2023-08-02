import React from "react";
import Item from "../item/item";

const ItemList = ({productos}) =>{

return(

<div>
    <div className="d-Flex justify-content-around align-items-center flex-wrap"></div>
    {productos.map ((prod)=> <Item key={prod.id} prod= {prod}/>)}
    
</div>
)

}

export default ItemList