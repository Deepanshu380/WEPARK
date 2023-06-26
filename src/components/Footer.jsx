import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      style={{
        backgroundColor: "black",
        color:"white",
        height: "10rem",
        // position:'fixed',
      }}
    >
      <Container maxWidth="xl" sx={{}}>
        <Grid
          container
          spacing={5}
          justifyContent="space-between"
          // alignItems="bas"
        >
          <Grid item xs={5} sm={4}>
            
            <Typography
              variant="h6"
              fontWeight={"bold"}
            >
              Contact Us
            </Typography>
            <Typography variant="body2" >
              13, Barakhamba Lane, Fire Brigade Lane, Barakhamba, New Delhi,
              Delhi 110001
            </Typography>
            <Typography variant="body2" >
              Email: info@example.com
            </Typography>
            <Typography variant="body2" >
              DMRC Helpline no. 155370
            </Typography>
          </Grid>

          <Grid item xs={5} sm={4}>
            <Typography
              variant="h6"
            
             
              fontWeight={"bold"}
            >
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/officialdmrc/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/officialdmrc/?hl=en"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://twitter.com/OfficialDMRC" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>

        <Box mt={1}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            All rights are reserved.
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
