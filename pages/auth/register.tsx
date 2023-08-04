import {} from 'react';
import NextLink from 'next/link';
import { AuthLayout } from '../../components/layouts'
import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material';

const RegisterPage = () => {
  return (
    <AuthLayout title={'Registrar'}>
        <Box sx={{ width: 350, padding:'10px 20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h1' component='h1'>Crear Cuenta</Typography>
                </Grid>

                <Grid item xs={12} sx={{ marginTop: 0}}>
                    <TextField label='Nombre' variant='outlined' fullWidth />
                </Grid>
                <Grid item xs={12} sx={{ marginTop: 0}}>
                    <TextField label='Correo' variant='outlined' fullWidth />
                </Grid>
                <Grid item xs={12} sx={{ marginTop: 0}}>
                    <TextField label='Contraseña' type='password' variant='outlined' fullWidth />
                </Grid>

                <Grid item xs={12}>
                    <Button color='secondary' className='circular-btn' size='large' fullWidth>
                        Guardar
                    </Button>
                </Grid>

                <Grid item xs={12} display='flex' justifyContent='end'>
                    <NextLink href='/auth/login' passHref legacyBehavior>
                        <Link underline='always'>
                            ¿Ya tienes una cuenta?
                        </Link>
                    </NextLink>
                </Grid>
            </Grid>
        </Box>
    </AuthLayout>
  )
}

export default RegisterPage