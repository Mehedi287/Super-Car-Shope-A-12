import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
// import useAuth from './../../../hooks/useAuth';
const Navigation = () => {

    const { user, logout } = useAuth()
    return (
        <Box sx={{ flexGrow: 1, mb: 5 }}>
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        SUPER CAR SHOP
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home">
                        <Button color="inherit">Home</Button>
                    </NavLink>

                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/services">
                        <Button color="inherit">Services</Button>
                    </NavLink>
                    {
                        user?.email ?
                            <Box>

                                <Button onClick={logout} color="inherit">Logout</Button>
                                <Button color="inherit"><Link to="/dashboard" style={{ textDecoration: "none", color: "white" }}>Dashboard</Link></Button>

                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};


export default Navigation;