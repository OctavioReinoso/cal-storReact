import { Box } from '@mui/material'
import React from 'react'
import { BasicTabs } from '../Tabs/tabs'
import { useParams, useNavigate } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { ItemList } from './itemList'


const categorias = [{id:'allProducts', name:'Mostrar todo'}, {id:'remeras', name:'Remeras'}, {id:'pantalones', name:'Pantalones'}, {id:'zapatillas', name:'Zapatillas'}, ]

export const ItemContainer = () => {

    const [ items, setItems ] =  React.useState([]);

    const { category } = useParams();
    const navigate = useNavigate();

    const current = categorias.some(categ => categ.id === category) ? category : 'allProducts';

    React.useEffect(() =>{
        if(!categorias.some(categ => categ.id === category)) {
            navigate('/products/allProducts')
        } 
    }, [category, navigate])

    React.useEffect(() => {
        const db = getFirestore();
        const getCollection = collection(db, 'productos')

        if(category === 'allProducts'){
            getDocs(getCollection)
            .then((snapshot) => {
                setItems(snapshot.docs.map(el => ({id: el.id, ...el.data()})))
                console.log(snapshot.docs.map(el => ({id: el.id, ...el.data()})));
            })
        }else if(categorias.some(cat => cat.id === category)){
            const q = query(getCollection, where('category', '==', category))
            getDocs(q)
            .then((snapshot) => {
                setItems(snapshot.docs.map(el => ({id: el.id, ...el.data()})))
                console.log(snapshot.docs.map(el => ({id: el.id, ...el.data()})));
            })
        }
    }, [category])

    return (
        <Box>
            <BasicTabs current={current} items={categorias} />
            <ItemList items={items}/>

        </Box>
    )
}
