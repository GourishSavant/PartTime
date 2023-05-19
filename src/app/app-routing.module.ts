import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';

import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';

6
import { AdminComponent } from './Adm/admin/admin.component';
import { UseradminComponent } from './Pages/useradmin/useradmin.component';
import { NormalGuard } from './normal.guard';
import { AdminGuard } from './admin.guard';




// import { NavbarComponent } from './Components/navbar/navbar.component';



const routes: Routes =[
  {
    path:'',component:HomeComponent,pathMatch:'full',
   
  },
  {
    path:'signup',component:SignUpComponent,pathMatch:'full',
   
  },
  {
    path:'login',component:LoginComponent,pathMatch:'full',
  },
  
  {
    path:'user-dashboard',component:UseradminComponent,pathMatch:'full',
    canActivate :[NormalGuard],
  },
  {
    path:'admin',component:AdminComponent ,
   
    canActivate:[AdminGuard],
  },
  
];
@NgModule({
  
  imports:[RouterModule.forRoot(routes)],
  exports : [RouterModule],

  
})
export class AppRoutingModule { }
