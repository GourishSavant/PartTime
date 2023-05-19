import { Component ,OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/Services/user-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  implements OnInit{
constructor(private userService: UserServiceService,private snackBar: MatSnackBar){}
public user={
  username:'',
  password:'',
  firstname:'',
  lastname:'',
  email:'',
  phone:'',
}


ngOnInit():void{}
formSubmit(){
  console.log(this.user);
  if(this.user.username == ''|| this.user.username == null){
    // alert('User name is Required')
    this.snackBar.open('User name is Required','',{duration:3000,
    verticalPosition:'top',
    
    });
    return;
    
  }

  //addUser: userService
  this.userService.addUser(this.user).subscribe(
    (data:any)=>{
      //success
      console.log(data);
      // alert('success');
      // this.snackBar.open('Success','',{duration:300,
      //   verticalPosition:'top',
        // });

        Swal.fire('successfully Done ','user is '+ data.id, 'success')
    },
    (error)=>{
      //error
      console.log(error)
      alert('something went wrong');
    }
  )
  
}
}
