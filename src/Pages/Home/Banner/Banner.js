import { Typography } from '@mui/material';
import React from 'react';

const Banner = () => {
    return (
        <div className="d-flex" style={{ backgroundImage: "url('https://image.freepik.com/free-vector/car-led-lights-realistic-composition-with-dark-silhouette-automobile-with-dimmed-headlights-shadows-illustration_1284-28532.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh", opacity: "initial" }}>
            <div container className="mt-5 p-5 ">
                <Typography variant="h4" sx={{ color: " hotPink", }}><span className="text-primary">Tesla</span> F45 </Typography>


                <Typography variant="h6" sx={{ color: "silver", width: "50%", margin: "0 auto" }}>Get competitive brokerage with Bell Direct, part of Bell Financial Group The Markets with Fast Direct Execution and Support in 30+ Languages at XM. Licensed and Regulated Broker, Multi Awarded </Typography>
            </div>
        </div>
    );
};

export default Banner;