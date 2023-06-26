import { Container } from "@mui/system";
import React from "react";
import { useState } from "react";
import CarRentalIcon from "@mui/icons-material/CarRental";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

import DrawerComp from "./DrawerComp";

//const navItems = ["How We Work", "About Us", "Developers", "Contact Us"];

export const Header = () => {
  const [value, setvalue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <Container
      style={{
        width: "100%",
        align: "center",
      }}
    >
      <AppBar style={{ opacity: 0.75, backgroundColor: "#060E17" }}>
        <Toolbar>
          <CarRentalIcon />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }} mx-3>
                WEPAЯK
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }} mx-5>
                WEPAЯK
              </Typography>
              <Tabs
                value={value}
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                indicatorColor="secondary"
                onChange={(e, value) => setvalue(value)}
              >
                {/* {navItems.map((items, index) => (
                  <Tab key={index} label={items} />
                ))} */}

                <Link style={{ color: "white", textDecoration: "none" }} to="/">
                  <Tab value="0" label="Home" />
                </Link>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/aboutUs"
                >
                  <Tab value="1" label="About Us" />
                </Link>
                <Link
                  to="/contactUs"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Tab value="2" label="Contact Us" />
                </Link>
                {/* <Link
                  to="/policy"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Tab value="3" label="Policy" />
                </Link> */}
              </Tabs>
              <Link to="/login">
                <Button sx={{ marginLeft: "50vh" }} variant="contained">
                  Login
                </Button>
              </Link>
              <Link to="/SignUpComp">
                <Button sx={{ marginLeft: "10px" }} variant="contained">
                  SignUp
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Container>
  );
};
