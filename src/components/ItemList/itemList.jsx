import React from 'react'
import { Box } from '@mui/material'
import { CardItem } from '../CardItem/card-item'

export const ItemList = ({items}) => {
    return (
        <Box sx={{display:'flex', justifyContent:'center', gap:'2rem', marginTop:'3rem'}}>
            {
                items.map((item, index) => <CardItem key={(index + item.title)} id={item.id} title={item.title} description={item.description} price={item.price} imgURL={item.pictureURL} category={item.category}   />)
            }
        </Box>
    )
}
