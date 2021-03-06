import React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from "../hook/useAuth"
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, signInWithGoogle } = useAuth();
    console.log(loginData);
    const location = useLocation();
    const history = useHistory();

    const handaleONBlure = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        console.log(loginData);
        loginUser(loginData.email, loginData.password);

        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)

    }

    return (
        <Box sx={{ mt: 8, p: 5, height: '60vh' }}>
            <form onSubmit={handleLoginSubmit} >
                <Typography sx={{ fontSize: 20, mt: 5 }} variant="h4">Login</Typography>
                <Box
                    sx={{
                        '& > :not(style)': { m: 1, width: '50%' },
                    }}
                    noValidate
                    autoComplete="off"

                >
                    <TextField
                        id="outlined-basic"
                        label="Email : "
                        variant="outlined"
                        name="email"
                        type="email"
                        onBlur={handaleONBlure}
                        sx={{ width: "75%" }}
                    />

                    <TextField id="filled-basic"
                        label="Password :"
                        variant="outlined"
                        type="password"
                        name="password"
                        onBlur={handaleONBlure}
                    />

                    <Button variant="contained" type="submit">Login</Button><br />

                    <Button onClick={handleGoogleSignIn} variant="contained">Sign In With Google</Button>


                    <Typography sx={{ margin: 30 }} variant="h6">
                        <Link style={{ textDecoration: "none ", color: "black", textAlign: "center" }} to="/register">New User ? Please Register</Link>
                    </Typography>


                </Box>
            </form>
        </Box>
    );
};

export default Login;