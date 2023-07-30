import React from "react"
import { CartWidget } from "../CartWidget/cart-widget"
import { Typography } from "@mui/material"
import image from './imglogo.png'
import { Link } from 'react-router-dom'
import { AppContext } from "../../context/contextProvider"

export const NavBar = () => {
    
    const { cartQuantity } = React.useContext(AppContext);

    return <header>
        <nav className='box-categories'>
            <Typography sx={{display:'flex', gap:'5px', justifyContent:'center'}}>
                <img src={image} alt="logoCaletaStore" className="logo-navbar"/>
                <Link to={'/'}>CaletaStore</Link>
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
            {
                cartQuantity === 0 ?
                <CartWidget cartQuantity={'0'}/> 
                :
                <CartWidget cartQuantity={cartQuantity}/>
            }
            
        </nav>
    </header>
    

}
