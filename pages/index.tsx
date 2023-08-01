import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../components/layouts';


const Home: NextPage = () => {
  return (
      <ShopLayout title={'PasernoShop - Home'} pageDescription={'Encuentra productos de Paserno'}>
        <Typography variant='h1' component='h1'>Tienda</Typography>
        <Typography variant='h2' sx={{ marginBottom: 1}}>Todo los productos</Typography>
      </ShopLayout>
      )
}

export default Home;