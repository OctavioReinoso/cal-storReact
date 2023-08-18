import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/contextProvider';
import { UserInfo } from '../User/user-info';


export const Cart = () => {
    
    const { carrito, cartClean, cartQuantity, createOrder, lastOrder } = React.useContext(AppContext);

    console.log(carrito)

    if(cartQuantity === 0){ 
        return(
            <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', margin:'12rem', gap:'1rem'}}>
                <Typography sx={{color:'white'}}>No hay items en el carrito :C</Typography>
                <Link to='/products/:category'>
                    <Button sx={{color:'white', border:'1px solid white'}}>
                    Volver a la tienda
                    </Button>
                </Link>
            </Box>
        )
    }
    
    return (
        <Box sx={{display:'flex', flexDirection:'column', gap:'2rem', justifyContent:'center', margin:'4rem'}}>
                <ul style={{display:'flex', flexDirection:'column', width:900, margin:'0rem 2rem'}}>
                    {
                        carrito.map((item, index) => {
                            return(
                                <li key={item.id + index} style={{display:'flex', color:'white', justifyContent:'space-between', flexDirection:'row', backgroundColor:'grey', gap:'6.4rem', alignItems:'center', padding:'0rem 2rem'}}>
                                        <img src={item.imageURL} style={{width:'140px', height:'95px', padding:'20px'}}/>
                                        <Typography>{item.title}</Typography>
                                        <Typography>{'Subtotal: $' + item.priceUnit}</Typography>
                                        <Typography>{'Cantidad: '+ item.quantity}</Typography>
                                        <Typography>{`Total: $${item.priceUnit * item.quantity}`}</Typography>
                                </li>
                            )
                        })  
                    }
                </ul>

            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', gap:'1rem', alignItems:'center'}}>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center', gap:'1rem', alignItems:'center'}}>
                    <Button onClick={cartClean} sx={{color:'white', border:'white 1px solid'}}>
                        Limpiar carrito
                    </Button>
                    <Link to='/products/:category'>
                        <Button sx={{color:'white', border:'white 1px solid'}}>
                            Volver a la tienda
                        </Button>
                    </Link>
                </div>
                <UserInfo carrito={carrito} createOrder={createOrder} lastOrder={lastOrder} />
            </Box>
        </Box>
    )
}