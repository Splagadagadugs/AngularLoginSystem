import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {


  constructor(private auth: AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.IsloggedIn()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
   
  }
  
}
