import { Component } from '@angular/core';
import { User } from '../regester/regester.component';
import { DataService } from '../appService/data.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent {

  users:User[]= [];

  constructor(private dataService:DataService){}

  ngOnInit() : void {
    const tempUser = JSON.parse(localStorage.getItem('users') || '[]');
    this.users = tempUser;
  }
}
