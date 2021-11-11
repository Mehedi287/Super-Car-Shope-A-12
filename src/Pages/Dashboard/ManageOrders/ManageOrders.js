import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';

import Order from '../MyOrders/Order/Order';


const ManageOrders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://powerful-caverns-71105.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleDelete = id => {
        axios.delete(`https://powerful-caverns-71105.herokuapp.com/orders/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    const remain = orders.filter(order => order._id !== id);
                    setOrders(remain)
                    alert("delete successfully")
                }
            })
    }
    return (
        <Box>
            <Typography variant="h5">ALL Orders</Typography>
            <Grid container >
                {
                    orders.map(order => <Grid item xs={12} md={6}> <Order order={order} handleDelete={handleDelete} key={order._id}></Order></Grid>)
                }
            </Grid>
        </Box>
    );
};

export default ManageOrders;