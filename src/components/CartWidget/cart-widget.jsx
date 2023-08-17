import React from 'react'
import { Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

export const CartWidget = ({ cartQuantity }) => {
    return (
        <Link to={'/cart'}>
                <Badge badgeContent={cartQuantity} color='primary'>
                    <ShoppingCartIcon htmlColor='white'/>
                </Badge>
        </Link>
    )
}
