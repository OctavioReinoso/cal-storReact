import { Button } from '@mui/material'
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
        <Button sx={{margin:'0rem 1rem'}} onClick={decrement}>-</Button>
        <h4> {quantity} </h4>
        <Button sx={{margin:'0rem 1rem'}} onClick={increment}>+</Button>
        <div className='box-btn-comprar'>
            <Button sx={{border:'1px solid', margin:'0.8rem 0rem'}} onClick={()=> onAdd(quantity)} disabled={!stock}>
                Comprar
            </Button>
        </div>
    </div>
    )
}

// export default CarritoItemCount;
