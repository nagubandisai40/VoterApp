import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isUserLoggedIn():boolean{
    const user=JSON.parse(localStorage.getItem('user'));
    return user!=null;
  } 
}
