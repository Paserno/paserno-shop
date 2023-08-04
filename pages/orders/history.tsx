import { } from 'react';
import NextLink from 'next/link';

import { ShopLayout } from '../../components/layouts';
import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre', width: 300 },

    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra información si esta pagada la orden o no',
        width: 200,
        renderCell: (params: GridRenderCellParams) => { 
            return (
                params.row.paid
                ?  <Chip color='success' label='Pagada' variant='outlined'/>
                :  <Chip color='error' label='No pagada' variant='outlined'/>
            )
        }
    },
    { 
        field: 'order', 
        headerName: 'Order', 
        width: 200,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => { 
            return (
                <NextLink href={`/orders/${ params.row.id }`} passHref legacyBehavior>
                    <Link underline='always'> 
                        Ver orden
                    </Link>

                </NextLink>
            )
        }
    }
];

const row = [
    { id: 1, paid: true, fullname: ' Diego Rojas'},
    { id: 2, paid: false, fullname: ' Andres Valdes'},
    { id: 3, paid: true, fullname: 'Eduardo Herrera'},
    { id: 4, paid: false, fullname: 'Felipe Reyes'},
    { id: 5, paid: false, fullname: 'Tatiana Zapatas'},
    { id: 6, paid: true, fullname: 'Lisa Rios'},
]

const HistoryPage = () => {
    return (
        <ShopLayout title={'Historial de ordenes'} pageDescription={'Historial de ordenes del cliente'}>
            <Typography variant='h1' component='h1'>Historial de ordenes</Typography>

            <Grid container sx={{ marginTop: 2}}>
                <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        rows={row}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { pageSize: 5 }
                            },
                        }}
                        autoHeight
                        // pageSizeOptions={[5, 10, 25]}
                    />
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default HistoryPage