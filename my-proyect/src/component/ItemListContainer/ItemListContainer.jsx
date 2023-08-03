import React, { useEffect } from "react";
import { useState } from "react";

import ItemList from "../ItemList/ItemList";
import { getProduct } from "../../mock/data";
import { useParams } from "react-router-dom";



const ItemListContainer = (propiedades) => {
    const [productos, setProductos] =useState ([])
    const {categoriaID}=useParams()
  


    useEffect(()=>{
        getProduct()
        .then((res)=>{
            if (categoriaID) {
                setProductos(res.filter((Item)=> Item.categoria === categoriaID))

            }
            else{
                setProductos(res)
            }
        })
        .catch((error) => console.log(error))
    
    },[categoriaID])
   
    
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