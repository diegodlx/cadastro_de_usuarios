import express from "express";
import * as usersController from "../controllers/users-controller";

export const usersRouter = express.Router();

usersRouter.get("/", usersController.getAllUsersController);
usersRouter.get("/id/:id", usersController.getUserByIdController);
usersRouter.get("/name/:name", usersController.getUserByNameController);
usersRouter.delete("/:id", usersController.deleteUserByIdController);
usersRouter.post("/", usersController.createNewUserController);
usersRouter.patch("/", usersController.updateUserIdController);