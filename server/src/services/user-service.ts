import { HttpResponse } from "../models/http-response";
import * as usersRepository from "../repositories/users-repository"
import { StatusCode } from "../utils/status-code";

const response: HttpResponse = {
    status: 0,
    data: undefined,
}

export const listAllUsersService = async (): Promise<HttpResponse> => {
    const data = await usersRepository.listAllPlayersRepository();
    data.length==0? response.status = StatusCode.NoContent : response.status = StatusCode.OK;
    response.data = data;
    return response
};

export const findUserByNameService = async (name: string): Promise<HttpResponse> => {
    const data = await usersRepository.findUserByNameRepository(name);
    data.length==0? response.status = StatusCode.NoContent : response.status = StatusCode.OK;
    response.data = data;
    return response
};

export const findUserByIdService = async (id: number): Promise<HttpResponse> => {
    const data = await usersRepository.findUserByIdRepository(id);
    data.length==0? response.status = StatusCode.NoContent : response.status = StatusCode.OK;
    response.data = data;
    return response
};

export const deleteUserByIdService = async (id: number): Promise<HttpResponse> => {
    const data = await usersRepository.deleteUserByIdRepository(id);
    data!==0? response.status = StatusCode.OK : response.status = StatusCode.BadRequest;
    response.data = undefined;
    return response
};

export const createNewUserService = async (id: number, name: string, age: number, job: string, register: number): Promise<HttpResponse> => {
    const data = await usersRepository.createNewUserRepository(id, name, age, job, register);
    data.length==0? response.status = StatusCode.NoContent : response.status = StatusCode.Created;
    response.data = data;
    return response
};

export const updateUserIdService = async (id: number, name: string, age: number, job: string, register: number): Promise<HttpResponse> => {
    const data = await usersRepository.updateUserIdRepository(id, name, age, job, register);
    data!==0? response.status = StatusCode.OK : response.status = StatusCode.BadRequest;
    response.data = undefined;
    return response
};