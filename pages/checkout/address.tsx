import {} from 'react';
import { ShopLayout } from '../../components/layouts';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const AddressPage = () => {
  return (
    <ShopLayout title='Dirección' pageDescription='Confirmar dirección del destino'>
        <Typography variant='h1' component='h1'>Dirección</Typography>

        <Grid container spacing={2} sx={{ marginTop: 2}}>
            <Grid item xs={12} sm={6}>
                <TextField label='Nombre' variant='outlined' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Apellido' variant='outlined' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Dirección' variant='outlined' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Dirección 2 (opcional)' variant='outlined' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Código Postal' variant='outlined' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Ciudad' variant='outlined' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <InputLabel>País</InputLabel>
                    <Select
                        variant='outlined'
                        label='País'
                        value={1}
                    >
                        <MenuItem value={1}>Argentina</MenuItem>
                        <MenuItem value={2}>Chile</MenuItem>
                        <MenuItem value={3}>Perú</MenuItem>
                        <MenuItem value={4}>Uruguay</MenuItem>
                        <MenuItem value={5}>Bolivia</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <Select
                        variant='filled'
                        label='Sexo'
                        value={2}
                    >
                        <MenuItem value={1}>Masculino</MenuItem>
                        <MenuItem value={2}>Femenino</MenuItem>
                    </Select>
                </FormControl>
            </Grid> */}
            <Grid item xs={12} sm={6}>
                <TextField label='Teléfono' variant='outlined' fullWidth />
            </Grid>
        </Grid>

        <Box sx={{ marginTop: 5}} display='flex' justifyContent='center'>
            <Button color="secondary" className="circular-btn" size='large'>
                 Revisar pedido
            </Button>
        </Box>

    </ShopLayout>
  )
}

export default AddressPage