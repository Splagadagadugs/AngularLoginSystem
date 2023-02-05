import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AuthGuardGuard } from './shared/auth-guard.guard';


const routes: Routes = [
  {path: '',redirectTo:'login',pathMatch:'full'},
  {path: 'login', component : LoginComponent,},
  {path: 'dashboard', component : DashboardComponent, canActivate: [AuthGuardGuard]},
  {path: 'register', component : RegisterComponent, },
  {path: 'forgot-password', component : ForgotPasswordComponent, },
  {path: 'verify-email', component : VerifyEmailComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
