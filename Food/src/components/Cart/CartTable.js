import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {IconButton} from "@mui/material";
import { useDispatch } from "react-redux";
import {add_1_amount, subtract_1_amount, remove_item} from '../../state/ProductSlice' 
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';


function createData(product, amount, price, sum, id) {
  return { product, amount, price, sum, id };
}

export default function CartTable() {

  const dispatch = useDispatch()

  const products_data_global = useSelector((state) => state.product.products);

  const [hoveredRow, setHoveredRow] = React.useState(null);

  const rows = products_data_global
    .filter((product) => product.amount > 0)
    .map((product) => createData(product.title, product.amount, product.price, product.amount * product.price, product.id));

  const AllTogether = rows.reduce((total, row) => {
    return total + row.sum;
  }, 0);

  return (
    <TableContainer component={Paper} sx={{ minWidth: 750, boxShadow: 5,width: '70%', marginTop: '69px', marginBottom: '10px' }}>
      <Table sx={{ minWidth: 750 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{height: '63px'}}> 
            <TableCell>Product</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.product}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '63px' }}
            >
              <TableCell component="th" scope="row">{row.product}</TableCell>
              <TableCell sx={{width: '20%'}}>
              {hoveredRow === index && (
                  <div style={{}}>
                    <IconButton onClick={() => dispatch(subtract_1_amount(row.id))} sx={{margin:0, padding:'3px'}}>
                      <RemoveRoundedIcon />
                    </IconButton>
                    <IconButton onClick={() => dispatch(remove_item(row.id))} sx={{margin:0, padding:'3px'}}>
                      <DeleteOutlineRoundedIcon />
                    </IconButton>
                    <IconButton onClick={() => dispatch(add_1_amount(row.id))}sx={{margin:0, padding:'3px'}}>
                      <AddRoundedIcon />
                    </IconButton>
                  </div>
                )}
              </TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.price}$</TableCell>
              <TableCell align="right">{Math.round(row.sum)}$</TableCell>
            </TableRow>
          ))}
          <TableRow sx={{height: '63px'}}>
            <TableCell component="th" scope="row">
              All Together
            </TableCell>
            <TableCell></TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">{Math.round(AllTogether)}$</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
