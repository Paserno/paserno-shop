import { } from 'react';
import NextLink from 'next/link';
import { Button, Grid, Link, TextField, Typography } from '@mui/material'

export const LoginForm = () => {
    return (
        <Grid container spacing={3}>

            <Grid item xs={12}>
                <Typography variant='h1' component="h1">Iniciar Sesión</Typography>
            </Grid>

            <Grid item xs={12}>
                <TextField label="Correo" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextField label="Contraseña" type='password' variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={12}>
                <Button color="secondary" className='circular-btn' size='large' fullWidth>
                    Ingresar
                </Button>
            </Grid>

            <Grid item xs={12} display='flex' justifyContent='end'>
                <NextLink href="/auth/register" passHref legacyBehavior>
                    <Link underline='always'>
                        ¿No tienes cuenta?
                    </Link>
                </NextLink>
            </Grid>
        </Grid>
    )
}
