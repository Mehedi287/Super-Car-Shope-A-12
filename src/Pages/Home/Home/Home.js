import { Box } from '@mui/system';
import React from 'react';
import AboutUs from '../AboutUs/AboutUs';

import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <Box sx={{ mt: 1 }}>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <AboutUs></AboutUs>
        </Box>
    );
};

export default Home;


// fake data 

