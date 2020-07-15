import { Injectable } from '@angular/core';
import { UserRepository } from '../../../../domain/repositories/user.respository';
import { UserModel } from '../../../../domain/models/user.model';
import { Observable, from } from 'rxjs';
import { UserMapper } from './user.mapper';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root',
})
export class UserDataBaseRepository extends UserRepository {
  mapper = new UserMapper();
  constructor(private fireAuth: AngularFireAuth) {
    super();
  }
  loginUser(user: UserModel): Observable<UserModel> {
    return from(
      this.fireAuth
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const userAuth = res.user;
          const userFirestore: UserModel = this.mapper.mapFrom(userAuth);
          userAuth
            .getIdToken()
            .then((token) => {
              localStorage.setItem('token', token);
              localStorage.setItem('refreshToken', userAuth.refreshToken);
            })
            .catch((err) => {
              localStorage.removeItem('token');
              localStorage.removeItem('refreshToken');
            });
          return userFirestore;
        })
        .catch((error) => {
          return error;
        })
    );
  }
  saveUser(user: UserModel): Observable<UserModel> {
    return from(
      this.fireAuth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          return error;
        })
    );
  }
  recoveryPassword(user: UserModel): Observable<any> {
    console.log(user);
    return from(
      this.fireAuth
        .sendPasswordResetEmail(user.email)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          return error;
        })
    );
  }
}
