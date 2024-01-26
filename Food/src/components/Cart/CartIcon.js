import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: 'rgb(212, 191, 106)'
  },
}));



export default function CartIcon() {
  const products_data_global = useSelector((state) => state.product.products);

  const badgeContent = products_data_global.reduce((total, product) => {
    return total + (product.amount > 0 ? 1 : 0);
  }, 0);

  return (
    <>
      <IconButton component={Link} to="/cart" sx={{ marginLeft: 'auto' }}>
        <StyledBadge badgeContent={badgeContent} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </>
  );
}
