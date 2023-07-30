import { Box, Card, CardContent, Typography, CardMedia, CardActionArea, CardActions } from '@mui/material'
import React from 'react'
import { ItemCount } from '../ItemCount/item-count'
import { AppContext } from '../../context/contextProvider'

export const ItemDetail = ({id, title, description, price, pictureURL, category, stock }) => {
    
    const { agregarProdCarrito } = React.useContext(AppContext)

    const agregarAlCarrito = (quantity) =>{
        agregarProdCarrito({
            id: id,
            title: title,
            description: description,
            price: price,
            pictureURL: pictureURL,
            category: category,
            stock: stock,
            quantity: quantity
        })
    };
    
    return (
        <Box sx={{display:'flex', justifyContent:'center', margin:'2rem 0rem'}}>
            <Card sx={{ width: 470, height: 470, padding:'5px', boxShadow:'1px 1px 12px'}}>
                <CardActionArea sx={{padding:'1rem'}}>
                    <CardContent sx={{display:'flex', alignItems:'center', gap:'0rem'}}>
                        <CardMedia sx={{width:260, height: 230}}
                            component="img"
                            height="300"
                            image={pictureURL}
                            category={category}
                            alt={title}/>
                        <Box sx={{padding:'0px 15px', alignItems:'center'}}>
                            <Typography variant="h4" component="div">
                                {title}
                            </Typography>
                            <Typography variant="h5" color="text.primary">
                                {'$' + price}
                            </Typography>
                            <Typography variant="h6" component="div">
                                {'Stock: '+ stock}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description || ""}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
                
                <CardActions>
                    <ItemCount stock={stock} agregarAlCarrito={agregarAlCarrito} />
                </CardActions>
                
            </Card>
        </Box>
    )
}
