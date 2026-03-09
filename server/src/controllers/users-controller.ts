import { Request, Response } from "express";
import * as usersService from "../services/user-service"

export const getAllUsersController = async (req: Request, res: Response): Promise<void> => {
    const response = await usersService.listAllUsersService();
    res.status(response.status).json(response.data);
}

export const getUserByNameController = async (req: Request, res: Response): Promise<void> => {
    const name = req.params.name as string;
    const response = await usersService.findUserByNameService(name);
    res.status(response.status).json(response.data);
}

export const getUserByIdController = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id as string);
    const response = await usersService.findUserByIdService(id);
    res.status(response.status).json(response.data);
}

export const deleteUserByIdController = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id as string);
    const response = await usersService.deleteUserByIdService(id);
    res.status(response.status).json(response.data);
}

export const createNewUserController = async (req: Request, res: Response): Promise<void> => {
    const {id, name, age, job, register} = req.body;
    const response = await usersService.createNewUserService(id, name, age, job, register);
    res.status(response.status).json(response.data);
}

export const updateUserIdController = async (req: Request, res: Response): Promise<void> => {
    const {id, name, age, job, register} = req.body;
    const response = await usersService.updateUserIdService(id, name, age, job, register);
    res.status(response.status).json(response.data);
}