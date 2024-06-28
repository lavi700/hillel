
import styled from "@emotion/styled"
import { CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import NavBar from "./NavBar";
import Button from "@mui/material/Button";
import TestButton from "./TestButton";

import Lottie from "lottie-react";
import phoneAnimationData from '../animations/phone_animation.json'

import { useDispatch, useSelector } from "react-redux";
import { handleOpenChat } from "../state/ChatSlice";
import ChatBox from "./ChatBox";
import SignupExample from "./SignupExample";

const RootContainer = styled("div")({
  minHeight: "100vh",

  backgroundImage: `url(${process.env.PUBLIC_URL}/images/food1.jpg)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

export default function Home(){

  const open_chat = useSelector((state) => state.chat.open_chat)
  const dispatch = useDispatch()

    return (
    <RootContainer>
      <CssBaseline />
      <NavBar />
      <Box sx={{paddingLeft: '25px', paddingTop: '90px'}}>
        <Typography variant='h2' component='h1' sx={{fontFamily: 'Raleway', lineHeight: '60px'}}>
            <span style={{color: 'rgb(212, 191, 106)'}}>Hillel</span>
            Your<br /> Next Food Experience.
         </Typography>
         <Typography sx={{fontFamily: 'Raleway', marginTop: '25px', color: 'rgb(50,50,50)'}} variant='h5'>Hillel Catering - Elevating Celebrations with Culinary Excellence
             <br />for Bar and Bat Mitzvahs, Birthdays, and Beyond!
          </Typography>
      </Box>

      <Button onClick={()=>dispatch(handleOpenChat())}>Open Chat</Button>
      {open_chat && <ChatBox />}   
      <Lottie animationData={phoneAnimationData} style={{ height: '200px', width: '200px' }} />  
      {/* <SignupExample />  */}
    </RootContainer>
    )
}
