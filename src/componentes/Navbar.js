import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ShoppingCart } from '@mui/icons-material'
import Logo from '../assets/Logo.SIN.nombre2.png'
import "./Navbar.css"
import { Badge, IconButton } from '@mui/material';


export default function Navbar() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="relative">
                <Toolbar className='navegador'>
                    <img src={Logo} className="imagen" />
                    <div className='textonav' />
                    <Typography variant="h6" color="white" component="div" sx={{ flexGrow: 1}}>
                        Hello Guest
                    </Typography>
                    <div className='boton'>
                        <Button color='inherit' variant='outlined'>
                            <strong>Loging</strong>
                        </Button>
                        <IconButton aria-label='show cart items' >
                            <Badge badgeContent={2} color='primary'>
                                <ShoppingCart className='carrito' fontSize='medium'  />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>

    );
}