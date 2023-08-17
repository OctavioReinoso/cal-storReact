import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import React from 'react'
import Swal from 'sweetalert2';

export const AppContext = React.createContext();
const { Provider } = AppContext;

export const ContextProvider = ({children}) => {
    
    const [carrito, setCarrito] = React.useState([]);
    const [orderId, setOrderId] = React.useState('')
    
    const agregarProd = (product) => {
        setCarrito([...carrito, product])
    }

    const removeProduct = (idPr) => {
        const updateCart = carrito.filter(prod => prod.id !== idPr)
        setCarrito(updateCart)
    }

    const cartClean = () => {
        setCarrito([])
    }

    const cartVerify = (idProd) => {
        return carrito.some(prod => prod.id === idProd)
    }

    // if(!cartVerify(product.id)){
    //     setCarrito(cart => [...cart, {...product, quantity }])
    // }

    const createOrder = (order) => {
        const db = getFirestore()
        const orders = collection(db, 'orders')
        
        addDoc(orders, order)
        .then((snapshot) => {
            setOrderId(snapshot.id)
            setCarrito([]);
            Swal.fire(
                'Gracias por su compra!',
                `Su orden #${snapshot.id} fue correctamente procesada`,
                'success'
            )
            const getDoc = doc(db, 'orders', snapshot.id);
            updateDoc(getDoc, {orderId: snapshot.id})
            
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <Provider value={{carrito, agregarProd, cartQuantity: carrito.length, cartClean, createOrder, lastOrder: orderId }}>
            { children }
        </Provider>
    )
}

