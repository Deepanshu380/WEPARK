import React from 'react'; 
import CardData from "./CardsStations";
import { useParams } from "react-router-dom";
import {
 
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Navbar from './Navbar';

export const Linesdata = () => {
    const path = useParams();
    console.log(path.name);

  return (
    <>
      <Navbar/>
      <Container style={{ marginTop: "4rem" }}>
        <Grid container spacing={4} justifyContent="center">
          {CardData.map((card) =>
            card.line === path.name ? (
              <Grid
                item
                xs={12}
                md={4}
                style={{ marginBottom: "1rem" }}
              
              >
                <CardActionArea>
                  <Card>
                    <CardMedia
                      // className={classes.cardMedia}
                      style={{ paddingTop: "100%" }}
                      image={card.image}
                      title="Random Image"
                    />

                    <CardContent
                      align="left"
                      style={{
                        backgroundColor: "#f152a570",
                      }}
                    >
                      <Container>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqCrleOcbIg-BfF0EncUuMNy8rRm83QN9fqM3feFCWk6CRjVPdxPa0L4CP07tBTE8f4M&usqp=CAU"
                          style={{
                            height: "1rem",
                            width: "1rem",
                            paddingTop: "1rem",
                            marginRight: "1rem",
                          }}
                          alt="logo"
                        />
                        <Typography
                          variant="button"
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {card.stationName}
                        </Typography>
                      </Container>

                      <Grid
                        container
                        spacing={2}
                        justifyContent="center"
                        style={{ marginTop: "1rem" }}
                      >
                        {card.TypesofVehicles.map((type) => (
                          <Grid
                            item
                            md={4}
                            style={{ fontWeight: "bold", padding: "1rem" }}
                          >
                            {type}
                          </Grid>
                        ))}
                      </Grid>
                    </CardContent>
                  </Card>
                  {/* </Link> */}
                </CardActionArea>
              </Grid>
            ) : (
              <></>
            )
          )}
        </Grid>
      </Container>
    </>
  );
}
