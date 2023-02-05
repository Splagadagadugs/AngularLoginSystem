import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email : string = '';
  password : string = '';




  constructor(private auth: AuthService, private toast: HotToastService) { }

  ngOnInit(): void {
  
  }

  login(){

    if(this.email == ''){
      this.toast.error('Please enter correct credentials');
      return;
    }

    if(this.password == ''){
      this.toast.error('Please enter correct credentials');

      return;
    }

    this.auth.login(this.email,this.password);
    this.email ='';
    this.password = '';



  }

  signInWithGoogle(){
    this.auth.googleSignIn();

  }




}
