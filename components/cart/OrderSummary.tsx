import {} from 'react';
import { Grid, Typography } from '@mui/material';


export const OrderSummary = () => {
  return (
    <Grid container>
        <Grid item xs={6}>
            <Typography>No. Productos</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>3 items</Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography>SubTotal</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{ `$${155.552}` }</Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography>Impuesto (19%)</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{ `$${29.555}` }</Typography>
        </Grid>

        <Grid item xs={6} sx={{ marginTop: 2}}>
            <Typography variant='subtitle1'>Total:</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end' sx={{ marginTop: 2}}>
            <Typography variant='subtitle1'>{ `$${211.104}` }</Typography>
        </Grid>
        
    </Grid>
  )
}
