import React from "react"
import { CartWidget } from "./CarritoIcon/cart-widget"
import { Typography } from "@mui/material"

export const NavBar = () => {
    return <header>
        <nav className='box-categories'>
            <Typography>
                <h3>CaletaStore</h3>
            </Typography>
            <ul>
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/">Productos</a>
                </li>
                <li>
                    <a href="/">Contacto</a>
                </li>
                <li>
                    <a href="/">Carrito</a>
                </li>
            </ul>
            <CartWidget />
        </nav>
    </header>
    

}
