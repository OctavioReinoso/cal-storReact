import React from 'react'
import { getItemsById } from '../pages/Home/items-catalogo';
import { Box } from '@mui/material';
import { ItemDetail } from '../ItemDetail/item-detail';

export const ItemDetailContainer = () => {
    const [producto, setProducto] = React.useState(null);
    
    React.useEffect(() =>{
        getItemsById(1)
        .then(res =>{
            setProducto(res)
        })
    }, [])

    return (
        <Box>
            <ItemDetail {...producto} />
        </Box>
    )
}
