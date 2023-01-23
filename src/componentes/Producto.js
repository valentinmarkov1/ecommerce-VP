import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function Producto ({producto:{id,nombre,image,precio,rating,decripcion}}) {
  return (
    <Card  sx={{ maxWidth: 250 }}>
      <CardMedia

        component="img"
        alt="Chomba"
        height="300"
        image= {image}
      />

      <CardContent>
        <Typography
        varian='h5'
        color='textSecondary'
        >
         
        </Typography>
       
        <Typography size="small" variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
       {precio}
      <CardActions>
        
        <IconButton arial-aria-label='Add to Cart'>
          <AddShoppingCartIcon> fontSize='large'</AddShoppingCartIcon>
        </IconButton>
        {Array(4)
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
      </CardActions>
    </Card>
  );

}