
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import axios from 'axios';


const Review = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post("https://powerful-caverns-71105.herokuapp.com/reviews", data)
            .then(res => {

                if (res.data.insertedId) {
                    alert("review successfully")
                    reset()
                }
            })
    };

    return (

        <form form onSubmit={handleSubmit(onSubmit)} >
            <Typography sx={{ fontSize: 20 }} variant="h4">Review</Typography>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '50%' },
                }}
                noValidate
                autoComplete="off"

            >
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    name="email"
                    type="text"
                    {...register("name")}
                    sx={{ width: "75%" }}
                />


                <TextField id="filled-basic"
                    label="Comment : "
                    variant="outlined"

                    {...register("comment")}
                />
                <TextField id="filled-basic"
                    {...register("rating")}
                    variant="outlined"
                    label="Rating"
                />
            </Box>
            <Button sx={{}} type="submit" variant="contained">Submit</Button>
        </form>
    );
};

export default Review;