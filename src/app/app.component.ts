import { Component, OnInit } from '@angular/core';
import { InteractionService } from './services/interaction.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'voterapplication';
  LoggedIn:boolean;
  constructor(private interactionService:InteractionService,private authService:AuthService,private router:Router){
  }
  ngOnInit(): void {
    this.interactionService.loginStatus$.subscribe(msg => {
      this.LoggedIn = msg;
    })

    if(this.authService.isUserLoggedIn())
    {
      this.LoggedIn=false;
    }else{
      this.LoggedIn=true;
    }
    // this.isLoggedIn=false;
  }

  logout(){
    localStorage.clear();
    this.interactionService.sendtoHeader(true);
    this.router.navigate(['/login'])
  }

}
