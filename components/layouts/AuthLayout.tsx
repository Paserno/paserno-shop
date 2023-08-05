import { FC } from 'react';
import Head from 'next/head'; 
import { Box } from '@mui/material';

interface Props {
    children?: React.ReactNode;
    title: string;

}


export const AuthLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title }</title>
        </Head>

        <main style={{
                // maxWidth: '1440px',
            }}>
            <Box display='flex'  justifyContent='center' alignItems='center' height='calc(100vh - 100px)'>
                { children }
            </Box>
        </main>
    </>
  )
}
