import React from 'react'
import { ItemListContainerr } from './catalogo'
import { Typography } from '@mui/material'



export const Home = () => {
    return (
        <div>
            <Typography variant='h4' align='center' margin='2rem'>Productos destacados</Typography>
            
            <ItemListContainerr />
        </div>
    )
}
