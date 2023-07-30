import React from 'react'
import { getItemsById } from '../../productos'
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/item-detail';
import { AppContext } from '../../context/contextProvider';

export const ItemDetailContainer = () => {
    const [producto, setProducto] = React.useState(null);
    // const [loading, setLoading] = React.useState(false);
    const { id } = useParams();

    const { agregarProdCarrito } = React.useContext(AppContext); 

    React.useEffect(() => {
        // setLoading(true)
        console.log(id);
        getItemsById(id)
        .then((res) => {
            setProducto(res)
        })
        // .finally(() => {
        //     setLoading(false)
        // })
    }, [id])
    
    return (
        <Box>
            <ItemDetail {...producto} agregarProdCarrito={agregarProdCarrito}/>
        </Box>
    )
}
