import React from 'react'
import { getItemsById } from '../../productos'
import { Box } from '@mui/material';
import { ItemDetail } from '../ItemDetail/item-detail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [producto, setProducto] = React.useState(null);
    
    const { category, itemId } = useParams();

    React.useEffect(() =>{
        getItemsById(itemId)
        .then(res =>{
            setProducto(res)
        })
        .catch(() => {
            console.log('error404')
        })
    }, [itemId])

    return (
        <Box>
            {
            producto && <ItemDetail {...producto} category={category} />
            }
        </Box>
    )
}
