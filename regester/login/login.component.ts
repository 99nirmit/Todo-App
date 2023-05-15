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
    const tempUser = JSON.parse(localStorage.getItem('users') || '[]');
    console.log(tempUser);
    const selectedUser = this.loginForm.value;
    console.log(selectedUser);

    const matchingUser = tempUser.find(
      (findUser:any) => findUser.email === selectedUser.email && findUser.password === findUser.password
    );
    if(matchingUser){
      console.log("match");
      this.dataService.setIsLogin(true);
          this.dataService.setCurreentUser(matchingUser)
          this.router.navigateByUrl('/profile');
          this.loginForm.reset();
    }else{
      alert("Login Detanied");
      console.log("Not match");      
    }
       }
  }


