import { Box } from '@mui/material'
import React from 'react'
import { BasicTabs } from '../Tabs/tabs'
import { useParams, useNavigate } from 'react-router-dom'
import { getItemsByCategory, getItemsCatalogo } from '../../productos'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { ItemList } from './itemList'


const categorias = [{id:'allProducts', name:'Mostrar todo'}, {id:'remeras', name:'Remeras'}, {id:'pantalones', name:'Pantalones'}, {id:'zapatillas', name:'Zapatillas'}, ]

const filtroCategoria = (id) => {
    switch(id) {
        case 'remeras':
            return'remeras';
        case 'pantalones':
            return 'pantalones';
        case 'zapatillas':
            return 'zapatillas';
        default:
            return 'ropa'
    }
}

export const ItemContainer = () => {
    const [ items, setItems ] =  React.useState([]);

    const { category } = useParams();
    const navigate = useNavigate();

    const current = categorias.some(categ => categ.id === category) ? category : 'allProducts';

    React.useEffect(() =>{
        if(!categorias.some(categ => categ.id === category)) {
            navigate('/products/allProducts')
        } else {
            const categoryToFilter = category === 'allProducts' ? '' : filtroCategoria(category)
            const dataCategory = category === 'allProducts' ? getItemsCatalogo : getItemsByCategory
            dataCategory(categoryToFilter)
                .then((res) => {
                setItems(res)
                })
        }
    }, [category, navigate])

    // React.useEffect(() => {
    //     getItemsByCategory(filtroCategoria(category))
    //     .then((res) => {
    //         setItems(res)
    //     })
        
    // }, [category])

    React.useEffect(() => {
        const db = getFirestore();

        const getCollection = collection(db, 'productos')

        const q = query(getCollection, where('category', '==', "remeras"))

        getDocs(q)
        .then((snapshot) => {
            console.log(snapshot.docs.map(el => ({id: el.id, ...el.data()})));

        })
    }, [])

    return (
        <Box>
            <BasicTabs current={current} items={categorias} />
            <ItemList items={items}/>

        </Box>
    )
}
