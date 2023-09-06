import React, { useEffect } from "react";
import { useState } from "react";

import ItemList from "../ItemList/ItemList";
import { getProduct } from "../../mock/data";
import { useParams } from "react-router-dom";
import {collection, getDocs, where, query} from "firebase/firestore"
import { db } from "../../firebase/firebase";



const ItemListContainer = (propiedades) => {
    const [productos, setProductos] =useState ([])
    const {categoriaID}=useParams()
  


    // useEffect(()=>{
    //     getProduct()
    //     .then((res)=>{
    //         if (categoriaID) {
    //             setProductos(res.filter((Item)=> Item.categoria === categoriaID))

    //         }
    //         else{
    //             setProductos(res)
    //         }
    //     })
    //     .catch((error) => console.log(error))
    
    // },[categoriaID])

    useEffect (()=>{
        const coleccionProductos= categoriaID ? query(collection(db, "productos"), where("categoria", "==", categoriaID)) :collection(db, "productos")
        getDocs(coleccionProductos)
        .then((res)=>{
            const list = res.docs.map((product)=>{
                return{
                    id:product.id,
                    ...product.data()
                }
            })
             setProductos(list)
                      
        })
        .catch((error)=> console.log(error))
        
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