import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Search from '../Search';
import Product from '../Product';
import './index.css';

function Home() {
  const [isHeaderSeacrh, setIsSearch] = useState(false)
  const [searchPropVal, setSearchPropVal] = useState('')
  const toIndex = (status: boolean, searchOldVal: string) => {
    setIsSearch(status)
    setSearchPropVal(searchOldVal)
    console.log("状态", isHeaderSeacrh, searchOldVal);
  }
  return (
    <Box
      className='page'
    >
      <div className='header'>
        <Box className='logo' onClick={() => { toIndex(false, '') }}>
          <strong>Best</strong>
          <span>Search</span>

        </Box>
        {
          isHeaderSeacrh && <Box className='search'><Search type='header' searchPropVal={searchPropVal} callBack={toIndex} /></Box>
        }
      </div>
      {
        !isHeaderSeacrh &&
        <Box>
          <Box className="title">Serch Trends</Box>
          <Box className='search-box'>
            <Box className='box-mian'>
              <Search type='main' callBack={toIndex} />
            </Box>
          </Box>
        </Box>
      }
      {
        searchPropVal &&
        <Product />
      }
      <Box>

      </Box>
    </Box>
  )
}
export default Home