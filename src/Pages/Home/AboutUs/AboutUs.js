import { Grid, Typography } from '@mui/material';
import React from 'react';

const AboutUs = () => {
    return (

        <div className="container-fluid mb-5">
            <Typography variant="h4" sx={{ m: 3 }}>Lets Know Us</Typography>
            <Grid container spacing="2" sx={{ mx: "auto" }}>
                <Grid item sx={12} md={4} sx={{ p: 2 }}  >
                    <img className="img-fluid" src="https://img.freepik.com/free-vector/realistic-metallic-car-logo_52683-36045.jpg?size=338&ext=jpg" alt="" />
                    <Typography variant="h6">Fastest Speed</Typography>
                    <p>Make sure your Volkswagen is looked after by trained service technicians that provide unmatched inspection standards and service quality. Maintain your Volkswagen with 100% environment-friendly paint and ensure your car receives genuine body and paint.</p>
                </Grid>
                <Grid item sx={12} md={4} sx={{ p: 2 }}  >
                    <img src="https://img.freepik.com/free-vector/realistic-metallic-car-logo-design-with-wrenches_52683-61887.jpg?size=338&ext=jpg" alt="" className="img-fluid" />
                    <Typography variant="h6">Super Brand</Typography>
                    <p>Polo maintenance cost values are for Polo 1.2L petrol manual transmission
                        Vento maintenance cost values are for Vento 1.6L petrol manual transmission
                        Per kilometer maintenance cost Varies from model to model</p>
                </Grid>
                <Grid item sx={12} md={4} sx={{ p: 2 }}  >
                    <img src="https://img.freepik.com/free-vector/vintage-car-parts-vector-illustration-chrome-piston-crossed-wrenches-build-auto-parts-accessories-text-car-service-garage-concept-emblems_74855-12572.jpg?size=338&ext=jpg" alt="" className="img-fluid" />
                    <Typography variant="h6">Free Service</Typography>
                    <p>Volkswagen One Price Assurance is applicable only on services availed at Volkswagen authorized workshop network. Estimate is based on Voice of Customer (VOC) and initial inspection of the vehicle. Final invoice amount may vary due to additional work or replacements necessary based on the detailed diagnosis undertaken, consequential damages, unreported concerns, noted during the service </p>
                </Grid>

            </Grid>
        </div>
    );
};
export default AboutUs;