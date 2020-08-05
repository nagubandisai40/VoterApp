import { Component, OnInit } from '@angular/core';
import { BackendConnectService } from 'src/app/services/backend-connect.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:BackendConnectService,private spinner:NgxSpinnerService) { }

  totalUsers:number;
  totalVotes:number=0;
  hackers:any=[]

  ngOnInit(): void {
    this.spinner.show();
    this.service.fetchHomeData().subscribe(res=>{
      // console.log(res);
      this.totalUsers=res['message'].length;
      for(const c of res['message'])
      {
        // console.log(c['votes'])
        this.totalVotes=this.totalVotes+c['votes'];
      }
      this.hackers=res['message'].slice(0,3);
      console.log(this.hackers)
      this.spinner.hide();
    },error=>{
      console.log(error)
      this.spinner.hide()
    })
  }
}
