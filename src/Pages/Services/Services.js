import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import Cart from "../Home/Products/Cart/Cart"


import Box from '@mui/material/Box';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://powerful-caverns-71105.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    return (
        <Box sx={{ flexGrow: 1, mt: 8, md: "ml: 5", pl: 3 }}>
            <Typography sx={{ mt: 5, color: "blue", fontWeight: 500 }} variant="h4">Our Latest Car </Typography>
            <Grid sx={{ p: 5 }} container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                {
                    services.map(service => <Grid sx={{}} item xs={12} sm={12} md={4} key={service.name}> <Cart key={service.name} service={service}></Cart></Grid>)
                }

            </Grid>

        </Box>
    );
};

export default Services;