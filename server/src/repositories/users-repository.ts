import { UsersModel } from '../models/users-model';
import * as databaseConection from '../database/database-connection';

export const listAllPlayersRepository = async (): Promise<UsersModel[]> => {

  const res = await databaseConection.getOrCreateDb('SELECT * FROM public."user"')

  return res
};

export const findUserByNameRepository = async (name: string): Promise<UsersModel[]> => {
 
  const res = await databaseConection.getOrCreateDb(`SELECT * FROM public."user" WHERE name = '${name}'`)

  return res
};

export const findUserByIdRepository = async (id: number): Promise<UsersModel[]> => {
  
  const res = await databaseConection.getOrCreateDb(`SELECT * FROM public."user" WHERE id = ${id}`)

  return res
};

export const deleteUserByIdRepository = async (id: number): Promise<number> => {
  
  const res = await databaseConection.deleteOrUpdateDb(`DELETE FROM public."user" WHERE id = ${id}`);

  return res
};

export const createNewUserRepository = async (id: number, name: string, age: number, job: string, register: number): Promise<UsersModel[]> => {
  
  const res = await databaseConection.getOrCreateDb(`INSERT INTO public."user"(id, name, age, job, register) VALUES (${id}, '${name}', ${age}, '${job}', ${register}) RETURNING *; `);

  return res
};

export const updateUserIdRepository = async (id: number, name: string, age: number, job: string, register: number): Promise<number> => {

  const res = await databaseConection.deleteOrUpdateDb(`UPDATE public."user" SET id=${id}, name='${name}', age=${age}, job='${job}', register=${register} WHERE id = ${id}; `);

  return res
};