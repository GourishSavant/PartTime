import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private snack:MatSnackBar,private login:LoginService ,private router :Router){

  }
  
  ngOnInit(): void {
    
  }
  loginData= {
    username:'',
    password:''
  }
  formSubmit(){
    console.log("submit");

    if(this.loginData.username.trim()=='' ||this.loginData.username==null)
    {
        this.snack.open("Username is requires ",'',{
          duration:3000,
        })
        return;
    }
    
    if(this.loginData.password.trim()=='' ||this.loginData.password==null)
    {
        this.snack.open("Username is requires ",'',{
          duration:3000,
        })
        return;
    }

    //request to srver to generate token 
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("success");
        console.log(data);


        // login 
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
        (user:any)=>{
         this.login.setUser(user);
         console.log(user);



         
        //redirect ..ADMIN
        //redirect ..NORMAL
        if(this.login.getUserrole() == "ABCd")
        {
          //admin dashboard
          // window.location.href= '/admin';
          this.router.navigate(['admin']);
        }
        else if 
        (this.login.getUserrole() == "NORMAL"){
        // //normal user dashboard
        // window.location.href= '/user-dashboard';
        this.router.navigate(['user-dashboard']);
        }
        else{
          this.login.logout();
        }
      });

      },
      (error)=>{
        console.log('Error!!');
        console.log(error);
        this.snack.open('Invalid Details !! Try again' ,"",{
        duration:3000,
        })
      }
    );
  }
}
