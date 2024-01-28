import NavBar from "./NavBar";
import { CssBaseline } from "@mui/material";
import Product from "./Product";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import MenuBottomNavigation from "./MenuBottomNavigation";
import '../styles/Menu.css'
import FoodTypeFilter from "./FoodTypeFilter";
import PriceFilter from "./SelectFilter";
import React, { useEffect, useState } from "react";
import { handlePrice, handleFoodType } from "../state/FilterSlice";
import SelectFilter from "./SelectFilter";


export default function Menu() {
  const dispatch = useDispatch()  

  const priceFilter = useSelector((state) => state.filter.price);
  const foodTypeFilter = useSelector((state) => state.filter.food_type);
  const products_data_global = useSelector((state) => state.product.products);

  const [originalSortedList, setOriginalSortedList] = useState([]);
  const [inputFilter, setInputFilter] = useState('');
  const [filteredProductsList, setFilteredProductsList] = useState([]);

  useEffect(() => {
    let sortedList = [];
    const filteredList = products_data_global.filter(
      (product) =>
        product.filter === foodTypeFilter || foodTypeFilter === 'all'
    );
    if (priceFilter === 'Lowest To Highest') {
      sortedList = filteredList.slice().sort((a, b) => a.price - b.price);
    } else if (priceFilter === 'Highest To Lowest') {
      sortedList = filteredList.slice().sort((a, b) => b.price - a.price);
    } else {
      sortedList = filteredList;
    }
    setOriginalSortedList(sortedList);

    // Apply both filters
    const combinedFilteredList = applyInputFilter(sortedList, inputFilter);
    setFilteredProductsList(combinedFilteredList);
  }, [priceFilter, foodTypeFilter, inputFilter, products_data_global]);

  function handleInputChange(event) {
    setInputFilter(event.target.value);
    
  }

  function clearFilters(){
    setInputFilter('')
    dispatch(handleFoodType('all'))
    dispatch(handlePrice('No Filter'))

  }

  const applyInputFilter = (list, input) => {
    return list.filter(item =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
  };

  const products = filteredProductsList?.map((product) => (
    <Product
      title={product.title}
      desc={product.description}
      amount={product.amount}
      id={product.id}
      price={product.price}
      img={product.img}
    />
  ));

  return (
    <>
      <CssBaseline />
      <NavBar background='white' boxShadow={1} />
      <div style={{ marginTop: '75px', paddingBottom: '70px',display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', paddingLeft: '73px' }}>
        <div style={{display: 'flex', width: '100%', alignItems:'center', justifyContent: 'left', flexWrap: 'wrap'}}>
          <div style={{ display: 'flex', width: '30%', gap: '5px', marginLeft: '15px', marginRight: '6000px' }}>
            <input onChange={handleInputChange} value={inputFilter} placeholder="Search Here" style={{borderRadius: 5, height: '28px', borderWidth: '1px', borderColor: 'rgb(180,180,180)'}}/>
            <SelectFilter selector={foodTypeFilter} function={handleFoodType} label='' menuItemList={['all', 'meat', 'fish', 'vegi']}/>
            <SelectFilter selector={priceFilter} function={handlePrice} label='' menuItemList={['No Filter', 'Lowest To Highest', 'Highest To Lowest']}/>
            <Button onClick={clearFilters} sx={{width: '100%', height: '28px', fontSize: '14px', color:'rgb(50,50,50)'}}>Reset</Button>
          </div>
          {products.length > 0?products:<h3>There Is No Such Item - try to reset the filters</h3>}
        </div>
        
        
      </div>
      <MenuBottomNavigation />
    </>
  );
}
