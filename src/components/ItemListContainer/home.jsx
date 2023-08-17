import React from 'react'
import { ItemListContainerr } from './catalogo'
import { Box, Typography } from '@mui/material'

export const Home = () => {
    return (
        <>
            <Box sx={{position:'relative', backgroundColor:'black'}}>
                <Typography sx={{position:'absolute', fontSize:'4rem', fontFamily:'fantasy', color:'white', top:'10%', left:'38%', textShadow:'1px 1px 20px', color:'rgb(350, 500, 310)'}}>CaletaStore</Typography>
                <img style={{width:'100%', height:'110vh'}} src={'https://images.unsplash.com/photo-1456894332557-b03dc5cf60d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80'}/>
                <ItemListContainerr />
            </Box>
        </>
    )
}

export const Footer = () => {
    return (
        <footer style={{backgroundColor:'black', padding:'2rem 0rem'}}>
            <Typography sx={{display:'flex', justifyContent:'center', color:'white'}}>
            Copyright © 2023, CaletaStore.Todos los derechos reservados. 
            </Typography>
        </footer>
    )
}