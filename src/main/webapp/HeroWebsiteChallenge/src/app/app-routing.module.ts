import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperHumanComponent } from './super-human/super-human.component';
import { SuperTeamComponent } from './super-team/super-team.component';
import { RegisterSuperHumanComponent } from './register-super-human/register-super-human.component';
import { RegisterSuperTeamComponent } from './register-super-team/register-super-team.component';


const routes: Routes = [
  { path: 'super-human', component: SuperHumanComponent},
  { path: 'register-super-human', component: RegisterSuperHumanComponent},
  { path: 'super-human', component: SuperTeamComponent},
  { path: 'register-super-human', component: RegisterSuperTeamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
