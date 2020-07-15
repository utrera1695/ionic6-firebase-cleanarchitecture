export class UserModel {
  id: string;
  email: string;
  password: string;
  constructor(id: string) {
    this.id = id || '';
  }
}
