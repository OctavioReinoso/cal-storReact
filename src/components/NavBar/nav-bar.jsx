import React from 'react'
import styled from 'styled-components'

function NavBar() {
    return (
        <>
        <ContainerNav>
            <nav>
                <h3>CaletaStore</h3>
                <div className='box-categories'>
                    <a href="/">Inicio</a>
                    <a href="/">Productos</a>
                    <a href="/">Carrito</a>
                    <a href="/">Contacto</a>
                </div>
            </nav>
            
        </ContainerNav>
        </>
    )
}

export default NavBar

const ContainerNav = styled.header`
*{
    margin: 0%;
    padding: 0%;
}
nav{
    background-color: grey;
    h3{
        color: white;
        font-weight: 200 bold;
    }

    padding: 1rem 0rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .box-categories{
        display: flex;
        // justify-content: center;
        gap: 1rem;
        margin-right: 45%;
        a{
            color: white;
            text-decoration: none;
        }
    }
}
`