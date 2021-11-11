import { Grid, Typography } from '@mui/material';
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
                    <img style={{ borderRadius: "50%", height: '50%' }} src="https://img.freepik.com/free-psd/logo-mockup-brown-leather_35913-2101.jpg?size=338&ext=jpg" alt="" />
                    <Grid spacing={4}>
                        <CallSharpIcon sx={{ m: 4 }}></CallSharpIcon>
                        <FacebookSharpIcon sx={{ m: 4 }}></FacebookSharpIcon>
                        <WhatsAppIcon sx={{ m: 4 }}></WhatsAppIcon>
                        <SubscriptionsIcon sx={{ m: 4 }}></SubscriptionsIcon>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <h2>UseFull Link</h2>
                    <ul style={{ listStyleType: "none", padding: '20px' }}>
                        <li><Link style={{ textDecoration: "none", color: "white", fontSize: "20px", }} to="/">Home</Link></li>
                        <li><Link style={{ textDecoration: "none", color: "white", fontSize: "20px" }} to="/">Services</Link></li>
                        <li><Link style={{ textDecoration: "none", color: "white", fontSize: "20px" }} to="/">Review</Link></li>
                        <li><Link style={{ textDecoration: "none", color: "white", fontSize: "20px" }} to="/">Contact</Link></li>
                        <li><Link style={{ textDecoration: "none", color: "white", fontSize: "20px" }} to="/">Blog</Link></li>

                    </ul>

                </Grid>
                <Grid item xs={12} md={3}>
                    <h2>Contact Us</h2>
                    <Grid spacing={4}>
                        <CallSharpIcon sx={{}}></CallSharpIcon>
                        <Typography variant="h6">+86789686</Typography>
                        <FacebookSharpIcon sx={{}}></FacebookSharpIcon>
                        <Typography variant="h6">FaceBook Page</Typography>
                        <WhatsAppIcon sx={{}}></WhatsAppIcon>
                        <Typography variant="h6">Official WhatsApp</Typography>
                        <SubscriptionsIcon sx={{}}></SubscriptionsIcon>
                        <Typography variant="h6">YouTube</Typography>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    );
};

export default Footer;