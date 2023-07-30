import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

export const ItemCount = ({stock, agregarAlCarrito}) => {
    
    const navigate = useNavigate();
    const [clicked, setClicked] = React.useState(false);

    const [quantity, setQuantity] = React.useState(1);
    const increment = () => {
        quantity < stock && setQuantity(quantity + 1)
    }
    const decrement = () => {
        quantity <= 1 && setQuantity(quantity - 1)
    }

    const actCarrito = () => {
        agregarAlCarrito(quantity)
        setQuantity(1)
        setClicked(true)
    }

    const compraNavigate = () => {
        return navigate('/cart')
    }

    return (
        <div className='container-counter'>
            {
                clicked ? 
                <Button onClick={compraNavigate}>Ver en el carrito</Button> 
                :
            <>
                <Button sx={{margin:'0rem 1rem'}} onClick={decrement}>-</Button>
                <h4> {quantity} </h4>
                <Button sx={{margin:'0rem 1rem'}} onClick={increment}>+</Button>
                <div className='box-btn-comprar'>
                    <Button onClick={actCarrito} sx={{marginLeft:'3'}}>
                        Agregar al carrito
                    </Button>
                </div>
            </>
            }    
        </div>
    )
}

// export default CarritoItemCount;
