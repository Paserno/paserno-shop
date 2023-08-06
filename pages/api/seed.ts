import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedDatebase } from '../../database';
import { Product } from '../../models';

type Data = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if ( process.env.NODE_ENV === 'production') {
        return res.status(401).json({ message: 'No tienes acceso a este servicio' });
    } 
    const data = seedDatebase.initialData.products;
    await db.connect();
    await Product.deleteMany();
    await Product.insertMany( data );
    
    await db.disconnect();

    res.status(200).json({ message: 'Proceso realizado correctamente' })
}