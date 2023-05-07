import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../appService/data.service';

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

  constructor(private dataServive:DataService){}

  users:User[] = []

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
    const users = JSON.parse(localStorage.getItem('usres') || '[]');
    users.push(selectedUser);
    localStorage.setItem('users', JSON.stringify(users));
    console.log(users);
    
    // this.dataServive.users.push(selectedUser);
    // this.myRegestraionForm.reset();
  }

  // delete(index:number){
  //   this.dataServive.users.splice(index,1)
  // }


}

