import { Injectable } from '@angular/core';
import { User } from '../regester/regester.component';
import { BehaviorSubject, Observable, raceWith } from 'rxjs';
import { Lists } from '../regester/login/profile/to-do-list/to-do-list.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users:User[] = [];
  lists:Lists[] = [];
  constructor() { }

  public loginSubject = new BehaviorSubject<boolean>(false);
  public setIsLogin(IsLogin:boolean):void{
    this.loginSubject.next(IsLogin);
  }
  public currentUserSubject = new BehaviorSubject<any>(null);
  setCurreentUser(currentUser:any){
    this.currentUserSubject.next(currentUser);
    return currentUser;
  }
  getCurrentUser(): Observable <any>{
    return this.currentUserSubject.asObservable();
  }

  public regestrationSubject = new BehaviorSubject<any>(null);

  setCurreentRegesterUser(regtUser:any){
    this.regestrationSubject.next(regtUser);
    return regtUser;
  }

  getCurrentRegesterUser(): Observable <any>{
    return this.regestrationSubject.asObservable();
  }

  
}
