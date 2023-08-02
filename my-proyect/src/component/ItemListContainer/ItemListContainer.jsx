import React, { useEffect } from "react";
import { useState } from "react";

import ItemList from "../ItemList/ItemList";
import { getProduct } from "../../mock/data";


const ItemListContainer = (propiedades) => {
    const [productos, SetProductos] =useState ([])
  


    useEffect(()=>{
        getProduct()
        .then((res)=>{SetProductos(res)})
        .catch((error) => console.log(error))
    
    })
   
    
    return (
        <>
        
        <div className="titulo">
            {propiedades.texto}

        </div> 
         <ItemList productos ={productos}/>
         
         </>
    )
}

export default ItemListContainer