import { Request } from 'express';
import { HttpResponse } from '../interfaces';
import { IUser } from '../../model/user';

export interface IFindUserInput {
    email: string;
}

export interface IFindUserController {
    handle(req: Request): Promise<HttpResponse<IUser>>;
}
