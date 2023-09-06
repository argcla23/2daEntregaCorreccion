import React from "react";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";



const ItemDetail = ({producto}) => {
    const [quantityAdded , setQuantityAdded] = useState ('')
    const {addItem} = useContext(CartContext)
    

    const onAdd = (cantidad )=> {
    
    setQuantityAdded(cantidad)
    addItem(producto, cantidad)
    }
    

  
    return (
       

  <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title>{producto.name}</Card.Title>
          <Card.Text>
            {producto.descripcion}
          </Card.Text>
          <Card.Text>
            {producto.precio}
          </Card.Text>
          { quantityAdded === '' ? <ItemCount stock ={producto.stock} onAdd={onAdd} />
          : <Link to='/cart' className='btn btn-dark' >Ir al Carrito</Link>}
         
        </Card.Body>
        </Card>
         
    );
  }


export default ItemDetail 
