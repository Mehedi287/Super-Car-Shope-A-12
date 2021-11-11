import { Button, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, img, description, price, _id } = props.product
    const { handleDelete } = props;
    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardMedia
                component="img"
                height="140"
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    price :  {price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => handleDelete(_id)} variant="contained" size="large"> <Link style={{ textDecoration: "none", color: "white" }}  >Delete</Link> </Button>

            </CardActions>
        </Card >
    );
};

export default Product;