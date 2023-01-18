import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function (Producto) {
  return (
    <Card  sx={{ maxWidth: 250 }}>
      <CardMedia

        component="img"
        alt="Chomba"
        height="300"
        image='https://http2.mlstatic.com/D_NQ_NP_797001-MLA26840571309_022018-O.jpg'
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chomba Seleccion Argentina
        </Typography>
        <Typography size="small" variant="body2" color="text.secondary">
          Movete con comodidad incluso bajo el sol intenso. No importa si estás en la tribuna o en la calle, siempre podrás mostrar lo que sentís por la selección Argentina con esta chomba adidas. Su tejido suave y absorbente ayuda a mantener tu cuerpo fresco y cómodo en todo momento.
        </Typography>
      </CardContent>
      <CardActions>
        <strong>
          <div>
            $15.000
          </div>
        </strong>
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