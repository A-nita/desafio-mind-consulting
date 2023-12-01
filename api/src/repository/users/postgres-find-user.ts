import { IFindUserRepository } from './protocols';
import { UserInput } from '../../controller/users/protocols';
import { User } from '../../model/user';
import db from '../../db';

export class PostgresFindUserRepository implements IFindUserRepository {
  async findUser(user: UserInput): Promise<User> {

    const res = await db.query(
      'SELECT * FROM users WHERE email = ($1) AND password = ($2)',
      [user.email, user.password]
    );
    return res.rows[0];
  }
}
