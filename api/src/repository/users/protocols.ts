import { User } from '../../model/user';
import { UserInput } from '../../controller/users/protocols';

export interface IFindUserRepository {
    findUser(user: UserInput ): Promise<User>
}
