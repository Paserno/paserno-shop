import { } from 'react';
import { AuthLayout } from '../../components/layouts'
import { Box, Card, CardContent, Grid } from '@mui/material';
import { RegisterForm } from '../../components/auth/RegisterForm';



const RegisterPage = () => {
    return (
        <AuthLayout title={'Registrar'}>
            <Box sx={{ width: 400, padding: '10px 10px' }}>
                <Grid container >
                    <Grid item xs={12}>

                        <Card className='summary-card' sx={{ maxWidth: 400 }}>
                            <CardContent>
                                <RegisterForm />
                            </CardContent>
                        </Card>

                    </Grid>
                </Grid>

            </Box>
        </AuthLayout>
    )
}

export default RegisterPage