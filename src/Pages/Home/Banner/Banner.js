import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Banner = () => {
    return (
        <div className="d-flex" style={{ backgroundImage: "url('https://image.freepik.com/free-vector/car-led-lights-realistic-composition-with-dark-silhouette-automobile-with-dimmed-headlights-shadows-illustration_1284-28532.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh", opacity: "initial" }}>
            <Box container sx={{ mt: 7, p: 7 }}>
                <Typography variant="h4" sx={{ color: " hotPink", }}><span className="text-primary">Tesla</span> F45 </Typography>


                <Typography variant="h6" sx={{ color: "silver", width: "50%", margin: "0 auto" }}>Get competitive brokerage with Bell Direct, part of Bell Financial Group The Markets with Fast Direct Execution and Support in 30+ Languages at XM. Licensed and Regulated Broker, Multi Awarded </Typography>
            </Box>
        </div>
    );
};

export default Banner;