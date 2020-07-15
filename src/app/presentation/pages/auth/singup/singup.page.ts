import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SaveUserUseCase } from 'src/app/domain/usecases/user/saveuser.usecase';
import { UserModel } from 'src/app/domain/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {
  private form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private saveUser: SaveUserUseCase,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  ngOnInit() {}

  onSubmit() {
    const user: UserModel = this.form.value;
    this.saveUser.execute(user).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
