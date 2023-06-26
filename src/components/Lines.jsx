import React from 'react'
import SubwayOutlinedIcon from "@mui/icons-material/SubwayOutlined";
import {Grid,Card,CardContent,CardActionArea,Container,} from "@mui/material";
import { Link } from "react-router-dom";

let data = ["Red","Yellow","Blue","Green","Pink","Violet","Orange","Magenta","Grey"];
let colorsData = ["#EF9A9A","#FFF59D","#90CAF9","#A5D6A7","#F48FB1","#CE93D8","#FFCC80","#AB47BC","#BDBDBD"];

const lines = () => {
  return (
    <Container maxWidth="xl" style={{ height: "15rem" }}>
      <Grid container spacing={4} justifyContent="center">
        {data.map((lineName, index) => (
          <Grid item xs={12} sm={6} md={1} style={{ marginTop: "2rem" }}>
            {/* //   onClick={prop.openCard} */}

            <Link
              to={`/${lineName}/line`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <CardActionArea>
                <Card
                  style={{
                    width:"7rem",
                    borderRadius: "1rem",
                    backgroundColor: colorsData[index],
                  }}
                >
                  <Container align="center">
                    <SubwayOutlinedIcon
                      fontSize="large"
                      style={{ marginTop: "1rem" }}
                    />
                    <CardContent style={{align:"center"}}>{lineName} Line</CardContent>
                  </Container>
                </Card>
              </CardActionArea>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default lines
