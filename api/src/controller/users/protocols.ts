import { Request } from 'express';
import { User } from '../../model/user';

export interface HttpResponse<T> {
    statusCode: number;
    body: T | string;
}
export interface UserInput {
    email: string;
    password: string;
}

export interface IFindUserController {
    handle(req: Request): Promise<HttpResponse<User>>;
}
