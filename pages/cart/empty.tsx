import { } from 'react'
import NextLink from 'next/link'

import { ShopLayout } from '../../components/layouts'
import { Box, Link, Typography } from '@mui/material'
import { RemoveShoppingCartOutlined } from '@mui/icons-material'

const EmptyPage = () => {
    return (
        <ShopLayout title='Carrito vació' pageDescription='No hay artículos en el carro de compra'>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='calc(100vh - 200px)'
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            >
                <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
                <Box display='flex' flexDirection='column' alignItems='center'>
                    <Typography marginLeft={2}>Su carrito está vació</Typography>
                    <NextLink href='/' passHref legacyBehavior>
                        <Link typography='h4' color='secondary'>
                            Regresar
                        </Link>
                    </NextLink>
                </Box>
            </Box>
        </ShopLayout>

    )
}

export default EmptyPage