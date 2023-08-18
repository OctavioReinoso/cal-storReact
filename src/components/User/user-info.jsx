import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
// import { AppContext } from '../../context/contextProvider';

const emailValidate = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)

export const UserInfo = ({carrito, createOrder }) => {

    const [nombre, setNombre] = React.useState('')
    const [apellido, setApellido] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [telefono, setTelefono] = React.useState('')

    const submitBtn = () => {
        // formValidate() === false ? e.preventDefault() : alert('Datos correctos') 
        if(!formValidate() || !createOrder || !carrito.length){
            return;
        } 

        const order = {
            buyer: {
                nombre,
                apellido,
                email,
                telefono
            },
            items:carrito,
            createdAt: new Date(),
            total: carrito.reduce((acc, item) => acc + item.priceUnit * item.quantity, 0)
        }
        createOrder(order)
    }
    
    const formValidate = () => {
        return Boolean(nombre.length) && Boolean(apellido.length) && emailValidate(email) && Boolean(telefono.length)
    }
    console.log(formValidate())

    return (
        <Box component="form" sx={{display:'flex', justifyContent:'center', flexDirection:'column', margin:'2rem 0rem',  '& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off"> 
            {/* <Typography sx={{textAlign:'center', color:'white', fontFamily:'fantasy', fontSize:'1.6rem'}}>User Info</Typography> */}
            <Typography sx={{textAlign:'center', color:'white', fontSize:'1rem'}}>*Para terminar la compra registre sus datos*</Typography>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'grey', margin:'1rem 28rem', padding:'2rem', borderRadius:'10px'}}>
                <TextField sx={{border:'1px solid white', color:'white'}}
                onChange={(e) => setNombre(e.target.value)}
                required
                id="outlined-required"
                label="Nombre"
                value={nombre}
                />
                <TextField sx={{border:'1px solid white', color:'white'}}
                onChange={(e) => setApellido(e.target.value)}
                required
                id="outlined-required"
                label="Apellido"
                value={apellido}
                />
                <TextField sx={{border:'1px solid white', color:'white'}}
                onChange={(e) => setEmail(e.target.value)}
                required
                id="outlined-required"
                label="Mail"
                value={email}
                />
                <TextField sx={{border:'1px solid white', color:'white'}}
                onChange={(e) => setTelefono(e.target.value)}
                required
                id="outlined-required"
                label="Tel"
                value={telefono}
                />
                <Button onClick={submitBtn} disabled={!formValidate} sx={{color:'white', border:'white 1px solid', marginTop:'1rem'}}>Enviar</Button>
                
            </div>
        </Box>
    )
}
