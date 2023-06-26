import React from "react";

import { Typography } from "@mui/material";
import { Searchbar } from './Searchbar';
import "./home.css";
import { Container } from "@material-ui/core";
import { Header } from "./Header";



const Navbar = () => {
  return (
    <Container className="navBar" maxWidth="xl">
      <Header />
      <Container
        style={{
          position: "relative",
          top: "10rem",
          left: "0",
        }}
        maxWidth="xl"
      >
        <Typography
          variant="subtitle1"
          style={{ fontSize: "4rem", color: "white", fontWeight: "bold" }}
        >
          The Solution
        </Typography>
        <Typography
          variant="subtitle2"
          style={{ fontSize: "3rem", color: "white", fontWeight: "bold" }}
        >
          to your parking
        </Typography>
        <Typography
          variant="subtitle2"
          style={{ fontSize: "3rem", color: "white", fontWeight: "bold" }}
        >
          problems
        </Typography>
      </Container>

      <Searchbar />
     
    </Container>
  );
};

export default Navbar;
