import { Box } from '@mui/material'
import React from 'react'
import { BasicTabs } from '../Tabs/tabs'

const categorias = ['remeras', 'jeans', 'zapatillas']

export const ItemsList = () => {
    
    console.log(categorias)
    return (
        <Box>
            <BasicTabs />
        </Box>
    )
}
