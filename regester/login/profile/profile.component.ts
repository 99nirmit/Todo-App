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
  selectedUser:any;
  showEditForm = false;

  profileForm !: FormGroup;

    constructor(private dataService:DataService,private route:ActivatedRoute){}

    ngOnInit(){
    this.profileForm = new FormGroup({
      'name' : new FormControl(null),
      'email' : new FormControl(null),
      'mobile' : new FormControl(null),
      'password' : new FormControl(null)
    }) 
    }


    showUser(){
      this.dataService.getCurrentUser().subscribe(user => {
        console.log(user);
        const tempUser = JSON.parse(localStorage.getItem('users') || '[]');
        const matchUser = tempUser.find(
          (findUser:any) => 
              findUser.email === user.email && findUser.password === user.password
        );

        if(matchUser){
          console.log(JSON.stringify (matchUser) + " Succesfully getting the match user data");

          

          this.selectedUser =  matchUser;
          // this.profileForm.patchValue(this.selectedUser);
        }else{
          console.log("Not Found");
          
        }

          }
        )
        
      
    }


    onEdit(){
      this.showEditForm = true;
      this.dataService.getCurrentUser().subscribe(user => {
        console.log(user);
        const tempUser = JSON.parse(localStorage.getItem('users') || '[]');
        const matchUser = tempUser.find(
          (findUser:any) => 
              findUser.email === user.email && findUser.password === user.password
        );

        if(matchUser){
          console.log(JSON.stringify (matchUser) + " Succesfully getting the match user data");

          

          this.selectedUser =  matchUser;
          this.profileForm.patchValue(this.selectedUser);
        }else{
          console.log("Not Found");
          
        }

          }
        )
    }

    // onUpdate(){
    //   const selectedUser = this.profileForm.value;
    //   const tempusers = JSON.parse(localStorage.getItem('users') || '[]');
    //   console.log(tempusers);
      
    //   tempusers.push(selectedUser);
    //   localStorage.setItem('users', JSON.stringify(tempusers));
    //   console.log(tempusers + "Final");
    //   // this.myRegestraionForm.reset();
     
    //   console.log(this.dataService.users);
    // }
    onUpdate() {
      const updatedUser = this.profileForm.value;
      const tempUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const updatedUsers = tempUsers.map((user: any) => {
        if (user.email === this.selectedUser.email) {
          return { ...user, ...updatedUser };
        }
        return user;
      });
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      console.log(updatedUsers + "Final");
      this.profileForm.reset();
    }
    
      }
      
