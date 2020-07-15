import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginUserUseCase } from 'src/app/domain/usecases/user/loginuser.usecase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private loginUser: LoginUserUseCase,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}
  login() {
    this.loginUser.execute(this.form.value).subscribe(
      (result) => {
        if (result) {
          this.router.navigate(['/home']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
