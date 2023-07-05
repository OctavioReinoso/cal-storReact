import React from "react"
import { CartWidget } from "./CarritoIcon/cart-widget"
import { Button, Typography } from "@mui/material"
import image from './imglogo.png'

export const NavBar = () => {
    return <header>
        <nav className='box-categories'>
            <Typography sx={{display:'flex', gap:'5px', justifyContent:'center'}}>
                <img src={image} alt="logoCaletaStore" className="logo-navbar"/>
                <a href="./components/pages/Home/home">CaletaStore</a>
            </Typography>
            <ul>
                <Button sx={{color:'white', border:'1px solid'}} >Remeras</Button>
                <Button sx={{color:'white', border:'1px solid'}}>Zapatillas</Button>
                <Button sx={{color:'white', border:'1px solid'}}>Pantalones</Button>
            </ul>
            <CartWidget />
        </nav>
    </header>
    

}
