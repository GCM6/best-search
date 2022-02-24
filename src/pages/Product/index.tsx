import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './index.css'
import { RootState } from '../../redux/reducers'
import { useSelector } from 'react-redux'
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, Tooltip, Area } from 'recharts'

function Product() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '280px'
  }));
  const resData = useSelector((state: RootState) => {
    return state.searchReducersVal.data || []
  })
  const loading = useSelector((state: RootState) => {
    return state.searchReducers.isLoading
  })
  return (
    <Box className='product'>
      <Box>
        <Box>
          <Grid>
            <Grid item sx={{ margin: '0 auto' }} md={8}>
              <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 1, sm: 4, md: 12 }}>
                <Grid item sx={{ paddingBottom: '20px', fontSize: '24px' }} xs={12} sm={12} md={12} >
                  Related product trends
                </Grid>
                {resData.map((it: any, index: number) => (
                  <Grid item xs={1} sm={2} md={3} key={index}>
                    <Item>
                      {
                        loading ? <Skeleton variant="text" /> :
                          <div className='product-title'>{it.name}</div>
                      }
                      {
                        loading ? <Skeleton variant="text" /> :
                          <div className='product-text'>Growth {it.cpc}</div>
                      }
                      {
                        loading ? <Skeleton variant="rect" height={200} /> :
                          <ResponsiveContainer width="100%" height={200}>
                            <AreaChart
                              data={it?.search_msv}
                              syncId="anyId"
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis allowDataOverflow dataKey="date" />
                              <Tooltip />
                              <Area type="monotone" dataKey="sv" stroke="#82ca9d" fill="#82ca9d" />
                            </AreaChart>
                          </ResponsiveContainer>
                      }
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
export default Product