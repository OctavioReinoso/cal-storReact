import React from "react"
import { CartWidget } from "./CarritoIcon/cart-widget"
import { Typography } from "@mui/material"
import image from './imglogo.png'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

export const NavBar = () => {
    
    // const navigateNav = useNavigate()

    return <header>
        <nav className='box-categories'>
            <Typography sx={{display:'flex', gap:'5px', justifyContent:'center'}}>
                <img src={image} alt="logoCaletaStore" className="logo-navbar"/>
                <Link>CaletaStore</Link>
            </Typography>
            <ul>
                <Link to={'/'}>
                    Inicio
                </Link>
                <Link to={'/products/:category'}>
                    Productos
                </Link>
                <Link>
                    Contacto
                </Link>
            </ul>
            <CartWidget />
        </nav>
    </header>
    

}
