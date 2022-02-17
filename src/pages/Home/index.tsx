
import Box from '@mui/material/Box';
import Search from '../Search';
import Product from '../Product';
import './index.css';
function Home () {
return (
  <Box
      className='main'
  >
      <Search />
      <Product />
  </Box>
)
}
export default Home