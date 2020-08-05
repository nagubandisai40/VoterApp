import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackendConnectService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000/api/";

  login(email:string,password:string)
  {
    // console.log("In server component")
    return this.http.post(this.url+'login',{"email":email,"password":password})
  }

  fetchHomeData(){
    return this.http.get(this.url+'homeInfo')
  }

  register(name,email,password,userName,repeat_password){
    return this.http.post(this.url+'register',{"username":userName,"email":email,"password":password,"name":name,"password_repeat":repeat_password})
  }

  getHackerById(id){
    // console.log(id)
    return this.http.get(this.url+'getHackerById',{params:{'id':id}})
  }

  fetchAllHackers()
  {
    return this.http.get(this.url+'getAllHackers')
  }

  voteForId(voterId,usrid){
    console.log("the voter id is ",voterId)
    return this.http.get(this.url+'voteById',{params:{'voterId':voterId,'id':usrid}})
  }

  updateProfile(id,expertLevel,noChallengesSolved,java,python,ds,algo,cpp)
  {
    return this.http.post(this.url+'updateProfile',{
      'id':id,
      'expertLevel':expertLevel,
      'noChallenges':noChallengesSolved,
      'java':java,
      'python':python,
      'cpp':cpp,
      'ds':ds,
      'algo':algo
    })
  }

}
