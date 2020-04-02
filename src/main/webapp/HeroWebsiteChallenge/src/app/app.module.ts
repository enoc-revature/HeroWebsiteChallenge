import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperHumanComponent } from './super-human/super-human.component';
import { RegisterSuperHumanComponent } from './register-super-human/register-super-human.component';
import { SuperTeamComponent } from './super-team/super-team.component';
import { RegisterSuperTeamComponent } from './register-super-team/register-super-team.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperHumanComponent,
    RegisterSuperHumanComponent,
    SuperTeamComponent,
    RegisterSuperTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
