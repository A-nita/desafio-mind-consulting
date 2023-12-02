import { IUser } from '../../model/user';
import { IFindUserInput } from '../../controller/users/interfaces';

export interface IFindUserRepository {
    findUser(user: IFindUserInput ): Promise<IUser>
}
