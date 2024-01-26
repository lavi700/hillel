import { AppBar, Icon, IconButton, List, Toolbar } from "@mui/material"
import { NavLink, Link } from "react-router-dom"
import AppleIcon from '@mui/icons-material/Apple';
import '../styles/NavBar.css'
import CartIcon from "./Cart/CartIcon";
import ContactDrawer from "./ContactDrawer";
import { toggleDrawer } from '../state/ContactSlice';
import { useDispatch } from 'react-redux';



export default function NavBar(props){
    const dispatch = useDispatch() 

    return (
        <>
        <AppBar elevation={0} sx={{background: (props.background?props.background:'none'),boxShadow: (props.boxShadow?props.boxShadow:0) }}>
            <Toolbar sx={
                {width: '100%',
                margin: '0 auto', gap: '38px'}}>
                    <IconButton component={Link} to='/' sx={{marginRight: '170px'}}>
                        <Icon >
                            <AppleIcon />
                        </Icon>
                    </IconButton>
                    <NavLink className='navbar-link' to="/">Home</NavLink>
                    <NavLink className='navbar-link' to="/menu">Menu</NavLink>
                    <NavLink className='navbar-link' to='/gallery'>Gallery</NavLink>
                    <NavLink className='navbar-link' to='/about'>About</NavLink>
                    <NavLink component='button' className='navbar-link' onClick={() => dispatch(toggleDrawer(true))}>Contact Us</NavLink>
                    <CartIcon />
            </Toolbar>
            <ContactDrawer />
        </AppBar>
        </>)}