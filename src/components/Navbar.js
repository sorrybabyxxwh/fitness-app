import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/icons/icons8-gym-100.png'

const Navbar = () => {
  return (
    <Stack
        direction='row'
        justifyContent='space-around'
        sx={{
            gap: {
                sm: '100px', xs: '40px'
            },
            mt: { sm: '32px', xs: '20px'},
            justifyContent: 'none'}} px="30px">
        <Link to='/'>
            <img src={Logo} 
                 alt="logo"
                 style={{
                    width: '48px',
                    height: '48px',
                    margin: '0 20px'
                }}/>
        </Link>
        <Stack 
            direction="row"
            gap="40px"
            fontSize="24px"
            alignItems='flex-end'>
            <Link to="/" 
                    style={{
                        textDecoration: 'none',
                        color:"#3A1212",
                        borderBottom:'3px solid #2558ff'}}>
                            Home</Link>
                <a href="#exercise" 
                    style={{
                        textDecoration: 'none',
                        color:"#3A1212"}}>
                            Exercises</a>
            
        </Stack>
    </Stack>
  )
}

export default Navbar