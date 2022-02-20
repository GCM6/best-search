import { useState } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@mui/material/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './index.css'
import store from '../../redux/store'
function Product() {
  const [loading, setLoading] = useState(store.getState().searchReducers.isLoading)
  const setLoadingFn = () => {
    setLoading(store.getState().searchReducers.isLoading)
  }
  store.subscribe(setLoadingFn)
  let data = [1, 2, 3, 4, 5, 56]
  // return <div>product page123:{loading?'loading':'text'}</div>
  return (
    <Box className='product'>
      <Box>
        <Box className='product-header'>
          Related product trends
        </Box>
        <Box className='product-main'>
          {data.map(it =>
            <Box className='product-box'>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard{it}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="span">
                    Lizards are a widespread group
                  </Typography>
                </CardContent>
              </Card>
            </Box>)}
        </Box>
      </Box>
    </Box>
  )
}
export default Product