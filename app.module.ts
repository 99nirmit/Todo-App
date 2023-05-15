import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegesterComponent } from './regester/regester.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AllUsersComponent } from './all-users/all-users.component';
import { LoginComponent } from './regester/login/login.component';
import { ProfileComponent } from './regester/login/profile/profile.component';
import { ToDoListComponent } from './regester/login/profile/to-do-list/to-do-list.component';
import { DatePipe } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegesterComponent,
    AllUsersComponent,
    LoginComponent,
    ProfileComponent,
    ToDoListComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
