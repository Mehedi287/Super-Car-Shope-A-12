import { Typography, Button } from '@mui/material';
import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Order = (props) => {
    const { itemName, name, img, email, _id } = props.order
    const { handleDelete } = props;
    return (
        <Box sx={{ p: 2 }}>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={img}
                    alt="Live from space album cover"
                />
                <Box sx={{ p: 2 }}>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {email}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {name}
                    </Typography>

                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {itemName}
                        </Typography>

                        <Button onClick={() => handleDelete(_id)} variant="contained">Delete</Button>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                    </Box>
                </Box>

            </Card>
        </Box>

    );
};

export default Order;