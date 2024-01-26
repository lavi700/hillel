import { CssBaseline } from "@mui/material";
import CartTable from "./CartTable";
import NavBar from "../NavBar";


export default function CartPage(){

    return (
        <>
        <CssBaseline />
        <NavBar background='white' boxShadow={1}/>
        <div style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
            <CartTable />
        </div>
        </>
    )
}