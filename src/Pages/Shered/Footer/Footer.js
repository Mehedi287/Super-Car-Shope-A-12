import { Grid, Icon } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
const Footer = () => {
    return (
        <div>
            <Grid container spacing={2} sx={{ backgroundColor: "navy", color: "white", marginTop: "50px" }}>
                <Grid item xs={12} spacing={2} md={6}>
                    <h2>some this </h2>
                    <Grid spacing={4}>
                        <CallSharpIcon sx={{ m: 4 }}></CallSharpIcon>
                        <FacebookSharpIcon sx={{ m: 4 }}></FacebookSharpIcon>
                        <WhatsAppIcon sx={{ m: 4 }}></WhatsAppIcon>
                        <SubscriptionsIcon sx={{ m: 4 }}></SubscriptionsIcon>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <h2>UseFull Link</h2>
                    <ul style={{ listStyleType: "none" }}>
                        <li><Link style={{ textDecoration: "none", color: "white" }} to="/">Home</Link></li>
                        <li><Link style={{ textDecoration: "none", color: "white" }} to="/">Home</Link></li>
                        <li><Link style={{ textDecoration: "none", color: "white" }} to="/">Home</Link></li>
                        <li><Link style={{ textDecoration: "none", color: "white" }} to="/">Home</Link></li>
                        <li><Link style={{ textDecoration: "none", color: "white" }} to="/">Home</Link></li>

                    </ul>

                </Grid>
                <Grid item xs={12} md={3}>
                    <h2>Contact Us</h2>
                </Grid>

            </Grid>
        </div>
    );
};

export default Footer;