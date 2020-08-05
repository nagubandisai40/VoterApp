import { Component, OnInit } from '@angular/core';
import { BackendConnectService } from 'src/app/services/backend-connect.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: BackendConnectService,private interactionService:InteractionService,private router:Router,private spinner:NgxSpinnerService) { }

  email: string;
  password: string;

  ngOnInit(): void {
  }

  login() {
    // console.log("Login method is called")
    this.spinner.show();
    this.service.login(this.email, this.password).subscribe(res => {
      // console.log(JSON.stringify(res));
      localStorage.setItem('user',JSON.stringify(res));
      this.interactionService.sendtoHeader(false);
      this.spinner.hide();
      this.router.navigate(["/home"]);
    }, error => {
      this.spinner.hide();
      console.log(error)
      })
  }

}
