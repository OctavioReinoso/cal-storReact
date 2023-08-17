import React from 'react'
import { Box, CircularProgress } from '@mui/material'
import { CardItem }  from '../CardItem/card-item';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export const ItemListContainerr = () => {
    
    const [items, setItem] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        // setLoading(true);
        // getItemsCatalogo()
        // .then((res) =>{
        //     setItem(res);
        // })
        const db = getFirestore();
        const getProducts = doc(db, 'productos', '3dFQIgj3PrdbfHnhUu9h')

        getDoc(getProducts)
        .then((snapshot) => {
            const productsData = snapshot.data().items;
            // setItem({id: snapshot.id, ...snapshot.data().items})
            setItem(productsData)
        })
        // .finally(()=>{
        //     setLoading(false);
        // })
    },[])

    return (
        <>
            <Box sx={{display:'flex', justifyContent:'center', margin:'3rem 0rem' , gap:'4rem'}}>
                {/* {
                    loading ?
                    <CircularProgress />
                    :
                    items.map((item, index) => {
                        return (
                            <CardItem key={index + item.title} id={item.id} title={item.title} description={item.description} price={item.price} imageURL={item.imageURL} category={item.category} />
                        )
                    })
                } */}
            </Box>
        </>
    )
}

