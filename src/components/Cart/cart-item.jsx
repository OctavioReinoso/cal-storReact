import { Box, Card, CardMedia, Typography } from '@mui/material'
// import { AppContext } from '../../context/contextProvider'
import React from 'react'

export const CartItem = ({id, imageURL, title, price, quantity}) => {
    
    // const { AgregarProdCarrito } = React.useContext(AppContext) 
    // const cartFind = carrito.find(item => item.id === id)

    return (
        <Card sx={{display:'flex', backgroundColor:'grey', width:900, margin:'0rem 2rem'}}>
            <ul>
                <li style={{display:'flex', justifyContent:'space-between', flexDirection:'row', backgroundColor:'grey', gap:'10rem', alignItems:'center'}}>
                    <CardMedia
                        component="img"
                        alt={title}
                        image={imageURL}  
                        height="60"
                    />
                    <Typography>{title}</Typography>
                    <Typography>{'$' + price}</Typography>
                    <Typography>{'Cantidad: '+ quantity}</Typography>
                </li>
            </ul>
        </Card>
    )
}
