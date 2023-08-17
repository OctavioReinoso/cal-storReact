import React from 'react'
import { Box } from '@mui/material'
import { CardItem } from '../CardItem/card-item'

export const ItemList = ({items}) => {
    return (
        <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'3rem', margin:'2rem 0rem'}}>
            {
                items.map((item, index) => <CardItem key={(index + item.title)} id={item.id} title={item.title} description={item.description} price={item.price} imageURL={item.imageURL} category={item.category}  />)
            }
        </Box>
    )
}
