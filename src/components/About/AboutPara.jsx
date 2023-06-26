import React from "react";
import { Grid, Typography } from "@material-ui/core";
const AboutPara = () => {
  return (
    <>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        style={{ marginBottom: "4rem" }}
      >
        <Grid item md={6} xs={12}>
          <Typography align="center" variant="body1" paragraph style={{fontWeight:"bold"}}>
            Parking Facilities:
            <br />
            &#x2022; Provided at Metro stations for commuters to park their vehicles and use metro service.
            <br />
            &#x2022; Parking lots have been outsourced.
            <br />
            &#x2022; Responsibilities of parking contractor Safety and security
            parked vehicles parked.
            <br />
            &#x2022;Pay compensation in case of theft or damage to vehicles.
            <br />
            &#x2022;DMRC supervises smooth operations and adherence to
            provisions made in contract by the contractors.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutPara;
