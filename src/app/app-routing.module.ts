import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlatsComponent } from './flats/flats.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

import { AuthGuardService } from "./services/auth-guard.service";


const routes: Routes = [
  { path: '', redirectTo: '/flats', pathMatch: 'full' },
  { path: 'flats', canActivate: [AuthGuardService], component: FlatsComponent },
  { path: 'schedule', canActivate: [AuthGuardService], component: ScheduleComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: '**', redirectTo: 'flats' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
