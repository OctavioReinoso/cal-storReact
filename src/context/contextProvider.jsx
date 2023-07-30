import React from 'react'

export const AppContext = React.createContext();
const { Provider } = AppContext;

export const ContextProvider = ({children}) => {
    
    const [carrito, setCarrito] = React.useState([]);
    
    const agregarProdCarrito = (product) => {
        setCarrito([...carrito, product])
    }

    return (
        <Provider value={{carrito, agregarProdCarrito, cartQuantity: carrito.length}}>
            { children }
        </Provider>
    )
}
