import React from 'react'
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/item-detail';
import { AppContext } from '../../context/contextProvider';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export const ItemDetailContainer = () => {
    const [producto, setProducto] = React.useState(null);
    // const [loading, setLoading] = React.useState(false);
    const { id } = useParams();

    const { agregarProd } = React.useContext(AppContext); 

    React.useEffect(() => {
        // setLoading(true)
        const db = getFirestore()
        const getProducts = doc(db, 'productos', id)

        getDoc(getProducts)
        .then((snapshot) => {
            setProducto({id: snapshot.id, ...snapshot.data()})
        })
        // .finally(() => {
        //     setLoading(false)
        // })
    }, [id])
    
    return (
        <Box>
            <ItemDetail {...producto} agregarAlCarrito={agregarProd} />
        </Box>
    )
}
