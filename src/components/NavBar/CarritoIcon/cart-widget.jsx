import React from 'react'
import { IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import  StyledBadge from '@mui/material/Badge'

export const CartWidget = () => {
    return (
        <IconButton aria-label='delete'>
            <StyledBadge badgeContent={4} color="primary">
                <ShoppingCartIcon htmlColor='white'/>
            </StyledBadge>
        </IconButton>
    )
}
