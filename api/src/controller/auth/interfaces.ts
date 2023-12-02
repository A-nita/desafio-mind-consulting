import { Request } from 'express';
import { HttpResponse } from '../interfaces';

export interface ILoginController {
  handle(req: Request): Promise<HttpResponse<string>>;
}

export interface ILoginInput {
  email: string;
  password: string;
}

