import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendConnectService } from 'src/app/services/backend-connect.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-hackers',
  templateUrl: './hackers.component.html',
  styleUrls: ['./hackers.component.css']
})
export class HackersComponent implements OnInit {

  constructor(private service:BackendConnectService,private router:Router,private spinner:NgxSpinnerService) { }
  users:any=[];
  id:any;
  ngOnInit(): void {
    // this.id=JSON.parse(localStorage.getItem('user'))['userId']
    this.spinner.show();
    this.service.fetchAllHackers().subscribe(res=>{
      this.users=res['message'];
      // console.log(res)
      this.spinner.hide();
    },error=>{
      this.spinner.hide();
      console.log(error)
    })
  }


  viewProfile(c){
    this.router.navigate(['/hackers/'+c.id])
  }

}
