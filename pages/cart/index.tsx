import { } from 'react'
import { Card, CardContent, Grid, Typography, Divider, Box, Button } from '@mui/material';
import { ShopLayout } from '../../components/layouts'
import { CartList, OrderSummary } from '../../components/cart';


const CartPage = () => {
    return (
        <ShopLayout title='Carrito - 3' pageDescription='Carrito de compras de la tienda'>
            <Typography variant='h1' component='h1'>Carrito</Typography>

            <Grid container sx={{marginTop: 2}}>
                <Grid item xs={12} sm={7}>
                    <CartList editable/>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h2'>Orden</Typography>
                            <Divider sx={{ my: 1 }}/>
                            
                            <OrderSummary />

                            <Box sx={{ marginTop: 3 }}>
                                <Button color='secondary' className='circular-btn' fullWidth >
                                    Checkout
                                </Button>

                            </Box>
                            
                        </CardContent>

                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default CartPage