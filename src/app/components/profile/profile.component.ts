import { Component, OnInit } from '@angular/core';
import { BackendConnectService } from 'src/app/services/backend-connect.service';
import * as $ from 'jquery';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service:BackendConnectService,private spinner:NgxSpinnerService) { }

  id:any;
  cUser:any={
    'id':'',
    'name':'',
    'cpp':0,
    'ds':0,
    'algo':0,
    'java':0,
    'python':0,
    'noChallengesSolved':0,
    'expertLevel':0,
    'votes':0
  }
  cUser1:any={
    'id':'',
    'name':'',
    'cpp':0,
    'ds':0,
    'algo':0,
    'java':0,
    'python':0,
    'noChallengesSolved':0,
    'expertLevel':0,
    'votes':0
  }
  user:any;

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('user'))
      // console.log(user['userId']);
      this.spinner.show();
    this.service.getHackerById(this.user['userId']).subscribe(res=>{
      console.log(res)
      this.cUser=res['message'][0]
      this.spinner.hide()
    },error=>{
      this.spinner.hide();
      console.log(error);
    })
  }

  saveProfile(){
    const id=this.user['userId']
    this.spinner.show()
    this.service.updateProfile(id,this.cUser1.expertLevel,this.cUser1.noChallengesSolved,this.cUser1.java,this.cUser1.python,this.cUser1.ds,this.cUser1.algo,this.cUser1.cpp).subscribe(res=>{
      console.log(res)
      $('#closer').click();
      this.spinner.hide();
      this.ngOnInit();
    },error=>{
      this.spinner.hide();
      console.log(error);
    });
  }

}
