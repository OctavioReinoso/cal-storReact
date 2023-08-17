import React from 'react'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const ItemCount = ({stock, agregarAlCarrito}) => {
    
    const navigate = useNavigate();
    const [clicked, setClicked] = React.useState(false);

    const [quantity, setQuantity] = React.useState(1);
    
    const increment = () => {
        quantity < stock && setQuantity(quantity + 1)
    }
    const decrement = () => {
        quantity >= 2 && setQuantity(quantity - 1)
    }

    const compraCarrito = () => {
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
                <Box sx={{display:'flex', gap:'1.2rem'}}>
                    <Button onClick={compraNavigate} sx={{padding:'0.2rem 0.2rem', border:'1px solid grey', backgroundColor:'grey', color:'black', fontFamily:'unset'}}>Ver en el carrito </Button>
                    <Link to='/products/:category'>
                        <Button sx={{padding:'0.2rem 0.2rem', border:'1px solid grey', backgroundColor:'grey', color:'black', fontFamily:'unset'}}>
                            Seguir comprando
                        </Button>
                    </Link>
                </Box>
                :
            <Box sx={{display:'flex', gap:'0.6rem'}}>
                <Button onClick={decrement}>-</Button>
                <h4> {quantity} </h4>
                <Button onClick={increment}>+</Button>
                <Button onClick={compraCarrito} sx={{border:'1px solid grey', backgroundColor:'grey', color:'black', fontFamily:'unset'}} >
                    Agregar al carrito
                </Button>
            </Box>
            }    
        </div>
    )
}

