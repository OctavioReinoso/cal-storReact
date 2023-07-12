import React from 'react'
import { getItemsById } from '../../productos'
import { Box } from '@mui/material';
import { ItemDetail } from '../ItemDetail/item-detail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [producto, setProducto] = React.useState(null);
    
    const { itemId } = useParams();

    React.useEffect(() =>{
        getItemsById(itemId)
        .then((res) =>{
            setProducto(res)
        })
    }, [itemId])

    return (
        <Box>
            <ItemDetail {...producto} />
            
        </Box>
    )
}
