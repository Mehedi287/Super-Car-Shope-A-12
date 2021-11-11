import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
const Addservice = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        axios.post("http://localhost:5000/services", data)
            .then(res => {

                if (res.data.insertedId) {
                    alert(" Add successfully")
                }
            })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography sx={{ fontSize: 20 }} variant="h4">Add A Service</Typography>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50%' },
                    }}
                    noValidate
                    autoComplete="off"

                >
                    <TextField id="filled-basic"
                        label="img url : "
                        {...register("img")}
                        variant="outlined"
                        name="img"
                    />
                    <TextField
                        label="Item Name : "
                        id="outlined-basic"
                        variant="outlined"
                        name="Item Name"
                        type="text"
                        {...register("name")}
                        sx={{ width: "75%" }}
                    />

                    <TextField id="filled-basic"
                        variant="outlined"
                        {...register("description")}
                        label="description"
                    />


                    <TextField id="filled-basic"
                        label="price : "
                        variant="outlined"
                        {...register("price")}
                    />


                </Box>
                <Button sx={{}} type="submit" variant="contained">Purchase</Button>
            </form>
        </div>
    );
};

export default Addservice;