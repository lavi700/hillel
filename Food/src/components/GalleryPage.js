import { CssBaseline } from "@mui/material"
import NavBar from "./NavBar"
import images_list from "../static/data/images_list"
import { useState, useEffect } from "react"
import '../styles/GalleryPage.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import {IconButton} from "@mui/material"
import Alert from '@mui/material/Alert';
import styled from "@emotion/styled"


const RootContainer = styled("div")({
  height: "100vh",
  position: 'relative',
  backgroundImage: `url(${process.env.PUBLIC_URL}/images/goldenSparkles1.webp)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflowY: 'auto'
});

export default function GalleryPage(){

    const [openImage, setOpenImage] = useState(false)

    const [currentImageIndex, setCurrentImageIndex] = useState('none')

    function handleOpenImg(index){
        setOpenImage(true)
        setCurrentImageIndex(index)
    }

    function handleArrowBack(){
        setCurrentImageIndex(prevIndex => {
            return (prevIndex > 0 ? prevIndex - 1 : prevIndex)
        })
    }

    function handleArrowForward(){
        setCurrentImageIndex(prevIndex => {
           return (prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex)
        })
    }

    const images = images_list.map((img, index) => (
        <>
        <img src={`${process.env.PUBLIC_URL}/${img}`} style={{width: '30%', borderRadius: 5, cursor: 'pointer', height: '35vh'}}
        onClick={() => handleOpenImg(index)}/>
        </>
    ))

    return (
        <>
        <CssBaseline />
        <RootContainer>
        {openImage && 
        <div style={{position: 'fixed',backgroundColor: 'rgba(0,0,0,0.9)', height: '100vh',width: '100%',
        
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0px', zIndex: 2000, gap: '15px'}}>
            <IconButton sx={{position: 'absolute', top: '10px', right: '10px', color: 'white'}} onClick={() => setOpenImage(false)}>
                <CloseRoundedIcon />
            </IconButton>
            <IconButton sx={{color: 'white'}} onClick={handleArrowBack}>
                <ArrowBackIosRoundedIcon />
            </IconButton>
            <img src={`${process.env.PUBLIC_URL}/${images_list[currentImageIndex]}`}
            style={{height: '60vh', width: '570px'}}/>
            <IconButton sx={{color: 'white', }}>
                <ArrowForwardIosRoundedIcon onClick={handleArrowForward}/>
            </IconButton>
        </div>}
        <NavBar background='white' boxShadow={1}/>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '15px', alignItems: 'center', justifyContent: 'center', marginTop: '72px'}}>
            {images}
        </div>
        </RootContainer>
        </>
    )
}