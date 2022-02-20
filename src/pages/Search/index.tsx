import React, { useState, useCallback } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles, withStyles } from '@material-ui/styles';
import { actionSearch } from '../../redux/action/apiActions/searchApi'
import store from '../../redux/store'
import './index.css'
const _ = require('lodash')
const useStylesd = makeStyles({
  button: {
    marginLeft: '10px',
    borderColor: '#ccc',
  },
  input: {
    width: '100%',
    height: '100%'
  }
});
const CssOutlinedInput = withStyles({
  root: {
    '& input:valid:focus + fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.87)'
    }
  },
})(OutlinedInput);
function Search(props: any) {
  const classes = useStylesd();
  const { callBack, type, searchPropVal } = props
  const [searchVal, setSearch] = useState(searchPropVal || '')
  const searchData = () => {
    if(searchVal === '') return
    console.log("actionSearch(searchVal)", store.getState().searchReducers.isLoading);
    store.dispatch(actionSearch(searchVal)as any )
    callBack(true, searchVal)
  }
  const keyUpEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      searchData()
    }

  }
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }, [])
  return (
    <Box className="search-main">
      <Box className="search-input">
        <CssOutlinedInput
          className={classes.input}
          value={searchVal}
          onKeyUp={keyUpEvent}
          onChange={handleChange}
        />
        <Button className={classes.button} variant="outlined" color="inherit">
          <SearchIcon style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
        </Button>
      </Box>
    </Box>
  )
}
export default Search