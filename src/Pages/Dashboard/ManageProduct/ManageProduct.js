import { Grid, Typography } from '@mui/material';
import { Box, } from '@mui/system';
import React, { useEffect, useState } from 'react';

import Product from './Product/Product';
import axios from 'axios';
const ManageProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const url = `https://powerful-caverns-71105.herokuapp.com/services`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleDelete = id => {
        axios.delete(`https://powerful-caverns-71105.herokuapp.com/services/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    const remain = products.filter(order => order._id !== id);
                    setProducts(remain)
                    alert("delete successfully")
                }
            })
    }
    return (
        <Box sx={{ flexGrow: 1, md: "ml: 5", pl: 3 }}>
            <Typography sx={{ m: 3, color: "blue", fontWeight: 500 }} variant="h4">Manage Products </Typography>
            <Grid sx={{ p: 5 }} container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                {
                    products.map(product => <Grid sx={{}} item xs={12} sm={12} md={4} key={product._id}> <Product handleDelete={handleDelete} key={product._d} product={product}></Product></Grid>)
                }

            </Grid>

        </Box>
    );
};

export default ManageProduct;