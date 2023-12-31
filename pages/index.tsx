import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../components/layouts';
import { initialData } from '../database/products';
import { ProductList } from '../components/products';


const Home: NextPage = () => {
  return (
      <ShopLayout title={'PasernoShop - Home'} pageDescription={'Encuentra productos de Paserno'}>
        <Typography variant='h1' component='h1'>Tienda</Typography>
        <Typography variant='h2' sx={{ marginBottom: 1}}>Todo los productos</Typography>

        <ProductList 
          products={ initialData.products as any }          
        />



      </ShopLayout>
      )
}

export default Home;