import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendConnectService } from 'src/app/services/backend-connect.service';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-hackerprofile',
  templateUrl: './hackerprofile.component.html',
  styleUrls: ['./hackerprofile.component.css']
})
export class HackerprofileComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:BackendConnectService,private authService:AuthService,private router:Router,private spinner:NgxSpinnerService) { }

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
  errorMessage:string;
  showE:boolean;

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.spinner.show();
    this.service.getHackerById(this.id).subscribe(res=>{
      console.log(res['message'][0]);
      this.cUser=res['message'][0];
      this.spinner.hide();
    },error=>{
      this.spinner.hide();
      console.log(error);
    })
  }

  vote(id){
    if(!this.authService.isUserLoggedIn())
    {
      this.router.navigate(['/login'])
    }
    // console.log(JSON.parse(localStorage.getItem('user'))['userId'])
    const voterId=JSON.parse(localStorage.getItem('user'))['userId']
    this.spinner.show();
    this.service.voteForId(voterId,id).subscribe(res=>{
      console.log(res);
      if(res['msg']=="You are already voted")
      { 
        this.spinner.hide();
        this.errorMessage="You have already voted";
        this.showE=true;
      }else{
        alert('Your vote is successfully recorded');
        this.spinner.hide();
        this.ngOnInit();
      }
    },error=>{
      console.log(error)
    })
  }

}
