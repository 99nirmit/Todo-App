import { Injectable } from '@angular/core';
import { User } from '../regester/regester.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users:User[] = [];
  constructor() { }
}
