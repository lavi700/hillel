import styled from "@emotion/styled";
import '../styles/About.css';
import { Box, CssBaseline, Paper } from "@mui/material";
import { Icon, IconButton } from "@mui/material"
import { Link } from "react-router-dom"
import AppleIcon from '@mui/icons-material/Apple';



const RootContainer = styled("div")({
  height: "100vh",
  backgroundImage: `url(${process.env.PUBLIC_URL}/images/foodCollage1.jpg)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});


export default function About() {

  return (
    <>
      <RootContainer>
        <CssBaseline />
          <IconButton component={Link} to='/' sx={{position: 'absolute', left: '-5px', top: '-7px'}}>
              <Icon >
                  <AppleIcon />
              </Icon>
          </IconButton>
        <Paper className="main-container">
          <Box className="titles-container">
            <h2 className="title">Welcome to Hillel Catering – Where Culinary Excellence Meets Unforgettable Events!</h2>
            <h4 className="subtitle">At Hillel Catering, we believe in transforming ordinary events into extraordinary experiences through the art of exceptional catering. With a passion for exquisite cuisine and a commitment to impeccable service, we have been delighting taste buds and creating lasting memories since our inception.</h4>
          </Box>
          <div style={{display: 'flex'}}>
            <div className="section-container">
              <h2 className="section-title">Our Story</h2>
              <h4 className="section-contant" style={{ maxWidth: '72%', wordWrap: 'break-word'}}>Founded with a vision to redefine the catering industry, Hillel Catering has evolved into a culinary powerhouse known for its innovation, attention to detail, and dedication to customer satisfaction. Our journey began with a simple desire – to elevate the dining experience at events of all scales. Today, we take pride in having become a trusted name synonymous with excellence.</h4>
            </div>
            <div className="section-container" >
              <h2 className="section-title">Culinary Craftsmanship</h2>
              <h4 className="section-contant" style={{ maxWidth: '72%', wordWrap: 'break-word'}}>Our chefs are the heart and soul of Hillel Catering, bringing creativity and expertise to every dish they create. From carefully curated menus to bespoke culinary creations, we infuse passion into every recipe. We source only the finest, freshest ingredients, ensuring that each bite is a moment of pure indulgence.</h4>
            </div>
          </div>

        </Paper>
      </RootContainer>
    </>
  );
}

/*Welcome to Hillel Catering – Where Culinary Excellence Meets Unforgettable Events!

At Hillel Catering, we believe in transforming ordinary events into extraordinary experiences through the art of exceptional catering. With a passion for exquisite cuisine and a commitment to impeccable service, we have been delighting taste buds and creating lasting memories since our inception.

Our Story
Founded with a vision to redefine the catering industry, Hillel Catering has evolved into a culinary powerhouse known for its innovation, attention to detail, and dedication to customer satisfaction. Our journey began with a simple desire – to elevate the dining experience at events of all scales. Today, we take pride in having become a trusted name synonymous with excellence.

Culinary Craftsmanship
Our chefs are the heart and soul of Hillel Catering, bringing creativity and expertise to every dish they create. From carefully curated menus to bespoke culinary creations, we infuse passion into every recipe. We source only the finest, freshest ingredients, ensuring that each bite is a moment of pure indulgence.*/
