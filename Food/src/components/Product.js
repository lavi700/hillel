import { Paper, Typography } from "@mui/material";
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {IconButton} from "@mui/material";
import { useDispatch } from "react-redux";
import {add_1_amount, subtract_1_amount} from '../state/ProductSlice' 
import '../styles/Product.css'


export default function Product(props){

    const dispatch = useDispatch()

    return (
        <>
            <div style={{display: 'flex', width: '100%', height: '250px', marginTop: '5px'}}>
                <Paper sx={{width: '100%', height: '100%', margin: '5px', display: 'flex'}}>
                    <img src={`${process.env.PUBLIC_URL}/${props.img}`} style={{ height: '97%',width: '380px', marginRight: '30px'}}/>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <h2>{props.title}</h2>
                        <h3>{props.desc}</h3>
                        <h5>{props.price}$</h5>
                        {!props.amount ? (
                        <button className="add-to-cart" onClick={() => dispatch(add_1_amount(props.id))}>Add To Cart</button>
                        ) : (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width:'7%' }}>
                            <IconButton onClick={() => dispatch(subtract_1_amount(props.id))}>
                            <RemoveRoundedIcon />
                            </IconButton>
                            <Typography>{props.amount}</Typography>
                            <IconButton onClick={() => dispatch(add_1_amount(props.id))}>
                            <AddRoundedIcon />
                            </IconButton>
                        </div>
                        )}
                    </div>
                    

                     
                </Paper>
            </div>
        </>
    )
}