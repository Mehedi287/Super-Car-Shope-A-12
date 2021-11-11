import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { useHistory } from 'react-router-dom';
import useAuth from '../hook/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { registerUser } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleRegistation = e => {

        if (loginData.password !== loginData.password2) {
            alert('Password Incorrect');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <Box sx={{ mt: 8 }}>
            <form onSubmit={handleRegistation}>
                <Typography sx={{ fontSize: "16" }} variant="h6">Register</Typography>
                <Box

                    sx={{
                        '& > :not(style)': { m: 1, width: '50%', },
                    }}
                    noValidate
                    autoComplete="off"

                >
                    <TextField
                        handleOnBlur
                        id="outlined-basic"
                        label="Name : "
                        variant="outlined"
                        type="text"
                        name="name"
                        onBlur={handleOnBlur}
                        sx={{ width: "75%" }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Email : "
                        onBlur={handleOnBlur}
                        variant="outlined"
                        type="email"
                        name="email"
                        sx={{ width: "75%" }}
                    />

                    <TextField id="filled-basic"
                        label="Password :"
                        variant="outlined"
                        name="password"
                        type="password"
                        onBlur={handleOnBlur}
                    />
                    <TextField id="filled-basic"
                        label="Retype Password :"
                        variant="outlined"
                        name="password2"
                        type="password"
                        onBlur={handleOnBlur}
                    />

                    <Button sx={{}} variant="contained" type="submit">Register</Button><br />
                    <Typography sx={{ textAlign: "center" }} variant="h6">
                        <NavLink style={{ textDecoration: 'none', color: 'black', textAlign: "center", fontSize: '16', }} to="/login">
                            Already Register ? Login
                        </NavLink>
                    </Typography>

                </Box>
            </form>
        </Box>
    );
};

export default Register;