import { Component } from '@angular/core';
import { DataService } from '../appService/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public isAuthenticated:boolean | undefined;

  constructor(private dataService:DataService){}
    // this.dataService.isAuthenticatdSubject.subscribe(
    //   (isAuthenticated:boolean) =>{
    //     this.isAuthenticated = isAuthenticated;
    //   }
    // )
  

  

}
