import React from 'react'
import { CatalogoProductos } from '../ItemListContainer/catalogo'
import { Typography } from '@mui/material'



export const Home = () => {
    return (
        <div>
            <Typography variant='h4' align='center' margin='2rem'>Productos</Typography>
            
            <CatalogoProductos />
        </div>
    )
}
