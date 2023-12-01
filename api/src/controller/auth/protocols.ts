import { Request } from 'express';
import { HttpResponse } from '../protocols';

export interface ILoginController {
  handle(req: Request): Promise<HttpResponse<string>>;
}

export interface ILoginInput {
  email: string;
  password: string;
}

export interface IUserInput {
  email: string;
  password: string;
}
