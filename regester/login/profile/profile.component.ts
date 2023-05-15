  import { Component } from '@angular/core';
  import { FormControl, FormGroup } from '@angular/forms';
  import { User } from '../../regester.component';
  import { DataService } from 'src/app/appService/data.service';
  import { ActivatedRoute, Route } from '@angular/router';

  @Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
  })
  export class ProfileComponent {

  currentUser:any;
  selectedUsers:any;
  showEditForm = false;
  currentIndex : any;
  profileForm !: FormGroup;
    constructor(private dataService:DataService,private route:ActivatedRoute){}

    ngOnInit(){
    this.profileForm = new FormGroup({
      name : new FormControl(null),
      email : new FormControl(null),
      mobile : new FormControl(null),
      password : new FormControl(null)
    }) 
    }
    
      showUser(){
        this.dataService.getCurrentUser().subscribe(user => {
          console.log(user);
          this.selectedUsers = [user];
        })
        console.log(this.selectedUsers);
      }

    onEdit(index:number){
      console.log(this.selectedUsers);
      this.showEditForm = true;
      this.currentIndex = index;
      const editUser = this.selectedUsers[index];
      this.profileForm.patchValue(editUser);
    }

    onUpdate() {
      const updateUser = this.profileForm.value;
      this.selectedUsers[this.currentIndex] = updateUser;
      console.log(this.selectedUsers);
      localStorage.setItem('users', JSON.stringify(this.selectedUsers));
      console.log(this.selectedUsers + "Final");
      this.profileForm.reset();
    }
      }
    
