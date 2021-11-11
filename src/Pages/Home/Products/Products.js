import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';

const Products = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/services`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1, md: "ml: 5", pl: 3 }}>
            <Typography sx={{ m: 3, color: "blue", fontWeight: 500 }} variant="h4">Our Latest Car </Typography>
            <Grid sx={{ p: 5 }} container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                {
                    services.slice(0, 6).map(service => <Grid sx={{}} item xs={12} sm={12} md={4} key={service.name}> <Cart key={service.name} service={service}></Cart></Grid>)
                }

            </Grid>
            <Button sx={{ textDecoration: "none" }} variant="outlined"> <Link to="/services">Show More</Link></Button>
        </Box >
    );
};

export default Products;



