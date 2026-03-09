import { StatusCode } from "../utils/status-code";
import { UsersModel } from "./users-model";

export interface HttpResponse {
    status: number;
    data: UsersModel[] | undefined;
}