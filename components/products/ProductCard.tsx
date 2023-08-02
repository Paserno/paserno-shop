import { FC, useMemo, useState } from 'react';
import NavLink from 'next/link'
import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';
import { IProduct } from '../../interfaces';
import { currencyExchange } from '../../helper';


interface Props {
    product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {

    const [isHovered, setIsHovered] = useState(false);

    const productImage = useMemo(() => {
        return isHovered
            ? `products/${product.images[1]}`
            : `products/${product.images[0]}`
    }, [isHovered, product.images]);

    return (
        <Grid
            item
            xs={6}
            sm={4}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card>
                <NavLink href='/product/slug' passHref prefetch={false} legacyBehavior>
                    <Link>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                className='fadeIn'
                                image={productImage}
                                alt={product.title}
                            />
                        </CardActionArea>
                    </Link>

                </NavLink>
            </Card>

            <Box sx={{ marginTop: 1 }} className='fadeIn'>
                <Typography fontWeight={700}>{product.title}</Typography>
                <Typography fontWeight={500}>{currencyExchange(product.price)}</Typography>

            </Box>

        </Grid>
    )
}
