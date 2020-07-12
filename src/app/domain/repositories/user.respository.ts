import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';

export abstract class UserRepository {
  abstract loginUser(user: UserModel): Observable<UserModel>;
  abstract saveUser(user: UserModel): Observable<UserModel>;
}
