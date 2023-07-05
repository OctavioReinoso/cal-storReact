import React, { useState } from 'react'   

export const CarritoItemCount = ({stock, initial, onAdd}) => {
    
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        quantity < stock && setQuantity(quantity + 1)
    }
    

    const decrement = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }
    
    return (
    <div className='container-counter'>
        <h2>Contador</h2>
        <button className='botones-item-count' onClick={decrement}>-</button>
        <h4> {quantity} </h4>
        <button className='botones-item-count' onClick={increment}>+</button>
        <div className='box-btn-comprar'>
            <button onClick={()=> onAdd(quantity)} disabled={!stock}>
                Comprar
            </button>
        </div>
    </div>
    )
}

// export default CarritoItemCount;
