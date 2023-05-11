import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../regester.component';
import { DataService } from 'src/app/appService/data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
  
export class LoginComponent {
  
  isLoggedIn:boolean = false;

  email!: string;
  password!:string;

  login!:FormGroup;

  loginForm = new FormGroup({
    email:new FormControl(null),
    password:new FormControl(null),
  });

  user:User[]=[]

  constructor(private dataService : DataService,private router : Router){}

  onlogin(){

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    const tempUser = JSON.parse(localStorage.getItem('users') || '[]');
    const matchingUser = tempUser.find(
      (findUser:any) => findUser.email ===  email && findUser.password === password);
      if(matchingUser){
        const reset = this.loginForm.reset();
        console.log(reset + "resetting");
        
        this.dataService.setIsAuthenticated(true);
        this.dataService.setCurreentUser(matchingUser)
        this.router.navigateByUrl('/profile');
        this.dataService.currentUserSubject.subscribe(user => {
          console.log(JSON.stringify(user) + " current user");
        })
        
      }else{
        alert("Login Detanied");
        this.loginForm.reset();
      }
  }

}
