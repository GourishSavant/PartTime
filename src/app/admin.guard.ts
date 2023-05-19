import { Injectable } from "@angular/core";

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from "./Services/login.service";



@Injectable({
  providedIn:'root'
})
export class AdminGuard implements CanActivate {
  constructor(private login :LoginService, private router:Router)
  {
    this.router.navigate(['login']);
  }
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {


    if(this.login.isLoggedIn() && this.login.getUserrole()== 'ABCd')
    {
        return true;
    }
     this.router.navigate(['login']);
      return false;
  }
  
}