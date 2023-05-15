import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegesterComponent } from './regester/regester.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { LoginComponent } from './regester/login/login.component';
import { ProfileComponent } from './regester/login/profile/profile.component';
import { ToDoListComponent } from './regester/login/profile/to-do-list/to-do-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'regester', component:RegesterComponent
  },
  {
    path:'allUsers', component:AllUsersComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'profile', component:ProfileComponent
  },
  {
    path:'toDo', component:ToDoListComponent
  },
  {
    path:'**', component:PageNotFoundComponent
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
