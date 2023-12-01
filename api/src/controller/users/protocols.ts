import { Request } from 'express';
import { HttpResponse } from '../protocols';
import { User } from '../../model/user';

export interface UserInput {
    email: string;
    password: string;
}

export interface IFindUserController {
    handle(req: Request): Promise<HttpResponse<User>>;
}
