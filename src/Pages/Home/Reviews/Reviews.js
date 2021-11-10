import React, { useEffect, useState } from 'react';

import { Grid, Typography } from '@mui/material';
import Review from './Review/Review';
import { Box } from '@mui/system';
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("./fakeReviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <>
            <Box>
                <Typography sx={{ m: 4 }} variant="h4">
                    Customer Reviews
                </Typography>
                <Grid container spacing="2">
                    {
                        reviews.map(review => <Grid item sx={{ p: 2 }} md={4} sm={12} xs={12}>
                            <Review key={review.name
                            } review={review}></Review>
                        </Grid>)
                    }

                </Grid >
            </Box>
        </>
    );
};

export default Reviews;