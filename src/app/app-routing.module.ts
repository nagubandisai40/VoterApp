import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HackersComponent } from './components/hackers/hackers.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HackerprofileComponent } from './components/hackerprofile/hackerprofile.component';
import { AfterLoginGuard } from './guards/after-login.guard';
import { BeforeLoginGuard } from './guards/before-login.guard';


const routes: Routes = [
  {path:'',redirectTo:"/home",pathMatch:'full'},
  {path:"home",component:HomeComponent,pathMatch:'full'},
  {path:"hackers",component:HackersComponent,pathMatch:'full'},
  {path:"login",component:LoginComponent,pathMatch:'full',canActivate:[BeforeLoginGuard]},
  {path:"register",component:RegisterComponent,pathMatch:'full',canActivate:[BeforeLoginGuard]},
  {path:"profile",component:ProfileComponent,pathMatch:'full',canActivate:[AfterLoginGuard]},
  {path:"hackers/:id",component:HackerprofileComponent,pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
