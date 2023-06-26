import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import Link from "@mui/material/Link";
import { Instagram, LinkedIn } from "@material-ui/icons";
import {
  Card,
 
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    fontWeight: "bold",
    marginTop: "30px",
  }
  }))
let cardsData = [
  {
    name: "Deepanshu",
    imageUrl:
      "https://images.unsplash.com/photo-1595268108971-680d086f8cb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    profession: "Developer",
    mailId: "deepanshua380@gmail.com",
    mailHref: "mailto:deepanshua380@gmail.com",
    instaId: "https://www.instagram.com/deepanshu_380",
    linkdlnId: "https://www.linkedin.com/in/deepanshu380/",
  },
  {
    name: "Shivam",
    imageUrl:
      "https://images.unsplash.com/photo-1610088441520-4352457e7095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    profession: "Developer",
    mailId: "abc@gmail.com",
    mailHref: "mailto:abc@gmail.com",
    instaId: "https://www.instagram.com/",
    linkdlnId: "https://www.linkedin.com/in/",
  },
];
const Members = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h4"
        style={{ marginBottom: "2rem", fontWeight: "bold" }}
        align="center"
      >
        Developers
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {cardsData.map((data) => (
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                className={classes.cardMedias}
                style={{ paddingTop: "100%" }}
                image={data.imageUrl}
                title="Members Image"
              />

              <CardContent align="left">
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                  {data.name}
                </Typography>

                <Typography variant="body1">{data.profession}</Typography>

              

                <Typography>
                  <IconButton> 
                    <Link href={data.mailId}  style={{ color: "black", textDecoration: "none" }}>
                      <MailIcon style={{}} />
                    </Link>
                  </IconButton>

                  <IconButton>
                    <Link href={data.instaId}>
                      <Instagram style={{ color: "#fa7e1e" }} />
                    </Link>
                  </IconButton>

                  <IconButton>
                    <Link href={data.linkdlnId}>
                      <LinkedIn style={{ color: "#0A66C2" }} />
                    </Link>
                  </IconButton>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Members;
