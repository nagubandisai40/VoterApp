import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }
  
  _loginStatus=new Subject<boolean>();
  loginStatus$=this._loginStatus.asObservable();

  sendtoHeader(msg:boolean)
  {
    this._loginStatus.next(msg);
  }

}
