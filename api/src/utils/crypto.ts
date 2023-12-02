import jwt from 'jsonwebtoken';

export const encryptJwt = (payload: string | object | Buffer) => {
  return jwt.sign(payload, process.env.JWT_SECRET as string);
};
