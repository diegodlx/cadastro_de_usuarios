import express from "express";
import { usersRouter } from "./routes/users-router";
import cors from "cors";

export function createApp() {
    const app = express();

    app.use(express.json());

    app.use(cors());
    app.use("/api/users", usersRouter);

    return app
}