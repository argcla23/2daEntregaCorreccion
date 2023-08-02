import React,{useEffect, useState} from "react";
import { getItem } from "../../mock/data";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
const [producto, SetProducto]
 = useState ([{}])

 useEffect(()=>{
    getItem()
    then ((res)=> SetProducto(res))
    .catch((error)=>console.log(error))

 },[])

return (

<div><ItemDetail producto={producto}/></div>

)
}

export default ItemDetailContainer