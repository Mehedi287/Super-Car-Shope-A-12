import React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Navigation from '../Shered/Navigation/Navigation';
const Register = () => {
    const handleRegistation = (e) => {
        e.preventDefault()
    }

    return (
        <div>

            <form sx={{}} onSubmit={handleRegistation}>
                <Typography sx={{ fontSize: "16" }} variant="h6">Login</Typography>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50%', },
                    }}
                    noValidate
                    autoComplete="off"

                >
                    <TextField
                        id="outlined-basic"
                        label="Name : "
                        variant="outlined"
                        type="text"
                        sx={{ width: "75%" }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Email : "
                        variant="outlined"
                        type="email"
                        sx={{ width: "75%" }}
                    />

                    <TextField id="filled-basic"
                        label="Password :"
                        variant="outlined"
                        type="password"
                    />

                    <Button sx={{}} variant="contained" type="submit">Login</Button><br />
                    <Typography sx={{ textAlign: "center" }} variant="h6">
                        <NavLink style={{ textDecoration: 'none', color: 'black', textAlign: "center", fontSize: '16', }} to="/login">
                            Already Register ? Logind
                        </NavLink>
                    </Typography>

                </Box>
            </form>
        </div>
    );
};

export default Register;