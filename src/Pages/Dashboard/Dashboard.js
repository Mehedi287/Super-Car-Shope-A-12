import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import {
    Switch,

    Link,
    useRouteMatch
} from "react-router-dom";

import { Button } from '@mui/material';
import MyOrders from './MyOrders/MyOrders';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Pay from './Pay/Pay';
import Review from './Review/Review';
import Navigation from '../Shered/Navigation/Navigation';
import Addservice from '../AddService/Addservice';
import useAuth from '../hook/useAuth';
import ManageOrders from './ManageOrders/ManageOrders';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AdminRoute from './AdminRoute/AdminRoute';
import Products from '../Home/Products/Products';
import ManageProduct from './ManageProduct/ManageProduct';


const drawerWidth = 200;

function Dashboard(props) {
    const { logout, admin } = useAuth()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            <List>

                <ListItem button key=''>
                    <Link style={{ textDecoration: "none", color: "black" }} to={`${url}/myOrders`}><Button sx={{ textDecoration: "none" }} color="inherit">My Orders</Button></Link>

                </ListItem>
                <ListItem button key=''>
                    <Link style={{ textDecoration: "none", color: "black" }} to={`${url}/pay`}><Button color="inherit">Pay</Button></Link>

                </ListItem>
                <ListItem button key=''>
                    <Link style={{ textDecoration: "none", color: "black" }} to={`${url}/review`}><Button color="inherit">Review</Button></Link>

                </ListItem>
                {
                    admin && <Box><ListItem button key=''>
                        <Link style={{ textDecoration: "none", color: "black" }} to={`${url}/addService`}><Button color="inherit">Add Service</Button></Link>

                    </ListItem>
                        <ListItem button key=''>
                            <Link style={{ textDecoration: "none", color: "black" }} to={`${url}/manageOrder`}><Button color="inherit">Manage Orders</Button></Link>

                        </ListItem>
                        <ListItem button key=''>
                            <Link style={{ textDecoration: "none", color: "black" }} to={`${url}/products`}><Button color="inherit">Manage Product</Button></Link>

                        </ListItem>
                        <ListItem button key=''>
                            <Link style={{ textDecoration: "none", color: "black" }} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>

                        </ListItem></Box>
                }
                <ListItem button key=''>
                    <Button onClick={logout} color="inherit">Logout</Button>

                </ListItem>

            </List>
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Navigation></Navigation>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Typography paragraph>
                    <Box sx={{}}>

                    </Box>
                </Typography>
                <Switch>

                    <PrivateRoute path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/pay`}>
                        <Pay></Pay>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/review`}>
                        <Review></Review>
                    </PrivateRoute>
                    <AdminRoute path={`${path}/addService`}>
                        <Addservice></Addservice>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrder`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/products`}>
                        <ManageProduct></ManageProduct>
                    </AdminRoute>

                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
