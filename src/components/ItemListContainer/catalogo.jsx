import React from 'react'
import { Box, CircularProgress } from '@mui/material'
import { CardItem }  from '../CardItem/card-item';
import { getItemsCatalogo } from '../../productos';


export const ItemListContainerr = () => {
    
    const [items, setItem] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        getItemsCatalogo()

        .then((res) =>{
            setItem(res);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[])

    return (
        <Box sx={{display:'flex', justifyContent:'center', margin:'3rem 0rem' , gap:'4rem'}}>
            {
                loading ?
                <CircularProgress />
                :
                items.map((item, index) => {
                    return (
                        <CardItem key={index + item.title} id={item.id} title={item.title} description={item.description} price={item.price} imgURL={item.pictureURL} category={item.category}  />
                    )
                })
            }
        </Box>
        
    )
}

