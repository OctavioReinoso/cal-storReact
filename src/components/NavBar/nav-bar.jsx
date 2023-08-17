import React from "react"
import { CartWidget } from "../CartWidget/cart-widget"
import { Button, Typography } from "@mui/material"
import image from './imglogo.png'
import { Link } from 'react-router-dom'
import { AppContext } from "../../context/contextProvider"

export const NavBar = () => {
    
    const { cartQuantity } = React.useContext(AppContext);

    return <header>
        <nav className='box-categories'>
                <Link to={'/'}>
                    <Typography sx={{display:'flex', gap:'5px', marginLeft:'10rem',alignItems:'center', fontFamily:'fantasy', fontSize:'25px'}}>
                        <img src={image} alt="logoCaletaStore" className="logo-navbar"/>
                        CaletaStore
                    </Typography>
                </Link>
                <Link to={'/products/:category'}>
                    <Button sx={{color:'white', margin:'0rem 2rem 0rem 42rem'}}>SHOP</Button>
                </Link>
            
            {
                cartQuantity === 0 ?
                <CartWidget cartQuantity={'0'}/> 
                :
                <CartWidget cartQuantity={cartQuantity}/>
            }
            
        </nav>
    </header>
    

}
