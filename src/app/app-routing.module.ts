import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./presentation/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./presentation/pages/auth/login/login.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'singup',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./presentation/pages/auth/singup/singup.module').then(
        (m) => m.SingupPageModule
      ),
  },
  {
    path: 'recoverypassword',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import(
        './presentation/pages/auth/recoverypassword/recoverypassword.module'
      ).then((m) => m.RecoverypasswordPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
