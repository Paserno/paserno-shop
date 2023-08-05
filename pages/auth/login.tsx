import { Box, Card, CardContent, Grid} from '@mui/material';
import { AuthLayout } from '../../components/layouts'
import { LoginForm } from '../../components/auth';

const LoginPage = () => {
    return (
        <AuthLayout title={'Ingresar'}>
            <Box sx={{ width: 400, padding: '10px 10px'}}>
                <Grid container >
                    <Grid item xs={12}>

                        <Card className='summary-card' sx={{ maxWidth: 400}}>
                            <CardContent>
                                <LoginForm />
                            </CardContent>
                        </Card>

                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    )
}

export default LoginPage