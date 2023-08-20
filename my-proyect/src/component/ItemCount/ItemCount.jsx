import React, {useState} from "react";
import {Button} from 'react-bootstrap'

const ItemCount =({stock, onAdd}) => {

    const [count, setCount] = useState (0)
    const sumar = () => {
        if (count<stock) {setCount(count+1)}
    }

    const restar = () => {
        if (count>0) {setCount(count-1)}
    }

    return (<div className="d-flex flex-column align-items-center justify-content-between">
    <div>
    <Button variant="outline-secondary" onClick={restar}>-</Button>{' '}
    <span className="btn">{count}</span>
    <Button variant="outline-secondary" onClick={sumar}>+</Button>{' '}
    </div>
    <Button className="mt-2" disabled={count === 0} variant="outline-secondary" onClick={()=>onAdd(count)}>Agregar</Button>{' '}
</div>)

}

export default ItemCount