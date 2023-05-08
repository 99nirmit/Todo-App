import { Component } from '@angular/core';
import { User } from '../regester.component';
import { DataService } from 'src/app/appService/data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  email!: string;
  password!:string;

  login!:FormGroup;

  loginForm = new FormGroup({
    email:new FormControl(null),
    password:new FormControl(null),
  });

  user:User[]=[]

  constructor(private dataService : DataService){}

  onlogin(){
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    const tempUser = JSON.parse(localStorage.getItem('users') || '[]');
    console.log(tempUser + "tempUSer");
    
    const matchingUser = tempUser.find(
      (findUser:any) => findUser.email ===  email && findUser.password === password);
      if(matchingUser){
        console.log("Find it Succssfully");
        this.loginForm.reset();
      }else{
        console.log("Not Find it");
        
      }
  }

}
