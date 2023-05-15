import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../appService/data.service';
import { Router } from '@angular/router';

export interface User{
  name: string,
  mobile: number,
  email:string,
  password:string
}

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.scss']
})
export class RegesterComponent {

  constructor(private dataServive:DataService,private route:Router){}

  users:User[] = [];

  myRegestraionForm !: FormGroup;

  ngOnInit(){
    this.myRegestraionForm = new FormGroup({
      'name': new FormControl(null),
      'mobile': new FormControl(null),
      'email': new FormControl(null),
      'password': new FormControl(null)
    })

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    this.users = users;

    }
  

  onSubmit(){
    const selectedUser = this.myRegestraionForm.value;
    const tempusers = JSON.parse(localStorage.getItem('users') || '[]');  
    tempusers.push(selectedUser);
    localStorage.setItem('users', JSON.stringify(tempusers));
    this.myRegestraionForm.reset();
    // this.route.navigateByUrl('/login')
  }
}

