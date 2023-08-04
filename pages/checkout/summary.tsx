import { } from 'react'
import NextLink from 'next/link'
import { Card, CardContent, Grid, Typography, Divider, Box, Button, Link } from '@mui/material';
import { ShopLayout } from '../../components/layouts'
import { CartList, OrderSummary } from '../../components/cart';


const SummaryPage = () => {
    return (
        <ShopLayout title='Resumen de orden' pageDescription='Resumen de la orden'>
            <Typography variant='h1' component='h1'>Resumen</Typography>

            <Grid container sx={{ marginTop: 2 }}>
                <Grid item xs={12} sm={7} >
                    <CartList />
                </Grid>
                <Grid item xs={12} sm={5} >
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h2'>Resumen (3 productos)</Typography>
                            <Divider sx={{ my: 1 }} />

                            <Box display='flex' justifyContent='space-between'>

                                <Typography variant='subtitle1'>Dirección de entrega</Typography>
                                <NextLink href='/checkout/address' passHref legacyBehavior>
                                    <Link underline='always'>
                                        Editar
                                    </Link>
                                </NextLink>
                            </Box>

                            <Typography>Diego Rojas</Typography>
                            <Typography>Algun lugar 123</Typography>
                            <Typography>Chile</Typography>
                            <Typography>+56 9 87654321</Typography>

                            <Divider sx={{ my: 1 }} />

                            <Box display='flex' justifyContent='space-between'>
                                <Typography variant='subtitle1'>Valor estimado</Typography>
                                <NextLink href='/cart' passHref legacyBehavior>
                                    <Link underline='always'>
                                        Editar
                                    </Link>
                                </NextLink>
                            </Box>

                            <OrderSummary />

                            <Box sx={{ marginTop: 3 }}>
                                <Button color='secondary' className='circular-btn' fullWidth>
                                    Confirmar Orden
                                </Button>

                            </Box>

                        </CardContent>

                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default SummaryPage