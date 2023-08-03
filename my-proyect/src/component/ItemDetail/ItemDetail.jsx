import React from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = (producto) => {
    
    const onAdd = (cantidad )=> {console.log('compraste',cantidad)}
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
          <ItemCount stock ={producto.stock} onAdd={onAdd} />
          <Button variant="primary">Ver Mas</Button>
        </Card.Body>
        </Card>
         
    );
  }


export default ItemDetail 
