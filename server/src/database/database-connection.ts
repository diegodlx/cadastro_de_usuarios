import { Pool } from 'pg';
import { UsersModel } from '../models/users-model';

export const getOrCreateDb = async (dbQuery: string): Promise<UsersModel[]> => {

    const res = await dbConnect(dbQuery);

  return res.rows
};

export const deleteOrUpdateDb = async (dbQuery: string): Promise<number> => {

  const res = await dbConnect(dbQuery);

  return res.rowCount ?? 0
};

const dbConnect = async (dbQuery: string) => {

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL
  });

  pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!');
  });

  const res = await pool.query(dbQuery);

  return res
}