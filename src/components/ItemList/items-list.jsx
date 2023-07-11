import { Box } from '@mui/material'
import React from 'react'
import { BasicTabs } from '../Tabs/tabs'
import { useParams, useNavigate } from 'react-router-dom'
// import { getItemsById } from '../../productos'
// import { getItemsByCategory, getItemsCatalogo } from '../../productos'

const categorias = [{id:'productos', name:'Mostrar todo'}, {id:'remeras', name:'Remeras'}, {id:'pantalones', name:'Pantalones'}, {id:'zapatillas', name:'Zapatillas'}, ]

export const ItemsList = () => {
    // const [prod, setProd] = React.useState([]);
    // const buscarCategoria = (id) => {
    //     switch(id){
    //         case 'remeras':
    //             return getItemsById(1)
    //         case 'pantalones':
    //             return getItemsById(2)
    //         case 'zapatillas':
    //             return getItemsById(3)
    //         default: 
    //             return 'ropa'
    //     }
    // }
    // console.log(buscarCategoria);
    const { category } = useParams();
    const navigate = useNavigate();

    const current = categorias.some(categ => categ.id === category) ? category : 'productos';

    React.useEffect(() =>{
        if(!categorias.some(categ => categ.id === category)) {
            navigate('/products/productos')
        }
    }, [category, navigate])

    // React.useEffect(() =>{
    //     const validarCategoria = category ? getItemsByCategory : getItemsCatalogo;

        
    // })

    return (
        <Box>
            <BasicTabs current={current} items={categorias} />
        </Box>
    )
}
