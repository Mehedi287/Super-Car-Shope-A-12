import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';

import useAuth from '../hook/useAuth';

import { useForm } from "react-hook-form";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Parchages = () => {

    const [detail, setDetail] = useState({})
    const { user } = useAuth()
    const { serviceId } = useParams()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.img = detail.img;
        data.itemName = detail.name;
        axios.post("https://powerful-caverns-71105.herokuapp.com/orders", data)
            .then(res => {
                console.log(res);

                if (res.data.insertedId) {
                    alert("Order successfully")
                }
            })
    };

    useEffect(() => {
        const url = `https://powerful-caverns-71105.herokuapp.com/services/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [])


    return (
        <Grid sx={{ mt: 8, p: 5 }} container spacing={2}>
            <Grid item xs={12} md={7}>
                {
                    detail.name && <form onSubmit={handleSubmit(onSubmit)}>
                        <Typography sx={{ fontSize: 20 }} variant="h4">Purchase</Typography>
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

                                variant="outlined"
                                name="email"
                                type="text"
                                defaultValue={user.displayName} {...register("name")}



                                sx={{ width: "75%" }}
                            />

                            <TextField id="filled-basic"

                                variant="outlined"
                                defaultValue={user.email} {...register("email")}

                            />
                            <TextField id="filled-basic"
                                defaultValue={detail.name}{...register("itemName")}
                                variant="outlined"

                                name="itemName"
                            />
                            <TextField id="filled-basic"
                                label="Address : "
                                variant="outlined"

                                {...register("address")}
                            />
                            <TextField id="filled-basic"
                                label="Phone : "
                                variant="outlined"

                                {...register("phone")}
                            />


                        </Box>
                        <Button sx={{}} type="submit" variant="contained">Purchase</Button>
                    </form>
                }
            </Grid>
            <Grid item xs={12} md={5}>
                <Card sx={{ maxWidth: 350 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={detail.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">

                            {detail.name}

                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {detail.description}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            price : {detail.price}
                        </Typography>
                    </CardContent>
                    <CardActions>


                    </CardActions>
                </Card>
            </Grid>

        </Grid >
    );
};

export default Parchages;