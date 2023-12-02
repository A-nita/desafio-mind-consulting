import { IFindUserRepository } from './interfaces';
import { IFindUserInput } from '../../controller/users/interfaces';
import { IUser } from '../../model/user';
import db from '../../db';

export class PostgresFindUserRepository implements IFindUserRepository {
  async findUser(user: IFindUserInput): Promise<IUser> {

    const res = await db.query(
      'SELECT * FROM users WHERE email = ($1)',
      [user.email]
    );
    return res.rows[0];
  }
}
