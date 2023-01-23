import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Producto from './Producto';
import productos from '../Product-data';

export default function Productos() {
  return (
    <Box  sx={{ flexGrow: 1}}>
      <Grid container  spacing={6} margin={5}>
        {
          productos.map( producto =>(
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Producto key={producto.id} producto={producto}/>
          </Grid>

          ))
        }
        
        
        {/* <Grid item xs={12} sm={6} md={4} lg={3}>
          <Producto/>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Producto/>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Producto/>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Producto/>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Producto/>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Producto/>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Producto/>
        </Grid> */}
        
      </Grid>
    </Box>
  );
}
