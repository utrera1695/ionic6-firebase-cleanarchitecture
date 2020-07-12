import { UserEntity } from './user.entity';
import { UserModel } from '../../../../domain/models/user.model';
import { Mapper } from '../../../../domain/base/mapper';

export class UserRepositoryMapper extends Mapper<UserEntity, UserModel> {
  mapFrom(param: UserEntity): UserModel {
    return {
      id: param.uid,
      email: param.email,
      password: param.password,
    };
  }

  mapTo(param: UserModel): UserEntity {
    return {
      uid: param.id,
      email: param.email,
      password: param.password,
    };
  }
}
