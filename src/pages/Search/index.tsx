import React, {useState, useCallback } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid  from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import './index.css'
function Search() {
  return (
    <Box className="search-main">
      <Box className="logo">
        <strong>Best</strong>
        <span>Search</span>
      </Box>
     <Box className="search-input">
        <OutlinedInput
            className="input"
            label="Password"
          />
          <Button className="search-btn" variant="outlined" color="inherit">
            <SearchIcon />
          </Button>
     </Box>
    </Box>
  )
}
export default Search