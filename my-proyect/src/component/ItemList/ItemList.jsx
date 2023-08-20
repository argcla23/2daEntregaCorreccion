import React from "react";
import Item from "../item/item";



const ItemList = ({productos}) =>{

return(
<>

    <div className="d-Flex justify-content-around align-items-center flex-wrap" >
    {productos.map ((prod)=> <Item key={prod.id} prod= {prod}/>)}
    
</div>
</>
)

}

export default ItemList