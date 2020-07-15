import { Component, OnInit } from '@angular/core';
import { RecoveryPassUseCase } from 'src/app/domain/usecases/user/recoverypass.usecase';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from 'src/app/domain/models/user.model';

@Component({
  selector: 'app-recoverypassword',
  templateUrl: './recoverypassword.page.html',
  styleUrls: ['./recoverypassword.page.scss'],
})
export class RecoverypasswordPage implements OnInit {
  formrecovery: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private recoveryPassword: RecoveryPassUseCase
  ) {
    this.formrecovery = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {}
  onSubmit() {
    const user: UserModel = this.formrecovery.value;
    console.log(user);
    this.recoveryPassword.execute(user).subscribe(
      (value) => {
        console.log(value);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
