import { Box, Card, CardContent, Typography, CardMedia, CardActionArea } from '@mui/material'
import React from 'react'
import { CarritoItemCount } from '../ItemCount/item-count'


export const ItemDetail = ({id, title, description, price, pictureURL, category}) => {
    return (
        <Box sx={{display:'flex', justifyContent:'center', margin:'3rem 0rem'}}>
            <Card sx={{ width: 430, height: 440}}>
                <CardActionArea sx={{padding:'1rem'}}>
                    <CardContent sx={{display:'flex', alignItems:'center', gap:'0rem'}}>
                        <CardMedia  
                            component="img"
                            height="300"
                            category={category}
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
                <CarritoItemCount stock={10} initial={1} onAdd={(quantity) => console.log("Compraste "+ quantity +" unidades")}/>
            </Card>
        </Box>
    )
}
