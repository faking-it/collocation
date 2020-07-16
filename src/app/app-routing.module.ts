import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlatsComponent } from './flats/flats.component';
import { ScheduleComponent } from './schedule/schedule.component';


const routes: Routes = [
  { path: '', redirectTo: '/flats', pathMatch: 'full' },
  { path: 'flats', component: FlatsComponent },
  { path: 'schedule', component: ScheduleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
