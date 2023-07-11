import { Box, Card, CardContent, Typography, CardMedia, CardActionArea, CardActions } from '@mui/material'
import React from 'react'
import { CarritoItemCount } from '../ItemCount/item-count'
import { Link } from 'react-router-dom'

export const ItemDetail = ({id, title, description, price, pictureURL, category}) => {
    return (
        <Box sx={{display:'flex', justifyContent:'center', margin:'3rem 0rem'}}>
            <Card sx={{ width: 430, height: 440}}>
                <CardActionArea sx={{padding:'1rem'}}>
                    <CardContent sx={{display:'flex', alignItems:'center', gap:'0rem'}}>
                        <CardMedia  
                            component="img"
                            height="300"
                            image={pictureURL}
                            alt={title}/>
                        <Box sx={{margin:'2rem', alignItems:'center'}}>
                            <Typography variant="h4" component="div">
                                {title}
                            </Typography>
                            <Typography variant="h5" color="text.primary">
                                {price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description || ""}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{justifyContent:'center'}}>
                    <Link to={`/products/${category}/${id}`}>
                        ... 
                    </Link>       
                </CardActions>
                <CarritoItemCount stock={10} initial={1} onAdd={(quantity) => console.log("Compraste "+ quantity +" unidades")}/>
            </Card>
        </Box>
    )
}
