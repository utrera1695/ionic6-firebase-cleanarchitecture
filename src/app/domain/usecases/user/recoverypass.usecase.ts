import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UseCase } from '../../base/usecase';
import { Observable } from 'rxjs';
import { UserRepository } from '../../repositories/user.respository';

@Injectable({
  providedIn: 'root',
})
export class RecoveryPassUseCase implements UseCase<UserModel, any> {
  constructor(private userRepository: UserRepository) {}

  execute(params: UserModel): Observable<any> {
    return this.userRepository.recoveryPassword(params);
  }
}
