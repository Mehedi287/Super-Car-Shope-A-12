import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import Rating from '@mui/material/Rating';

const Review = (props) => {
    const { name, comment, rating } = props.review
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>

                <Typography variant="body2">
                    {comment}
                </Typography>
            </CardContent>

            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >


                <Typography component="legend">Rating</Typography>
                <Rating name="read-only" value={rating} readOnly />


            </Box>
        </Card>
    );
};

export default Review;