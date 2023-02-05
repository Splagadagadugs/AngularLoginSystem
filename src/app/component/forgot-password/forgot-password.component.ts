import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {


  email : string = '';

  constructor(private auth: AuthService, private toast: HotToastService) { }

  ngOnInit(): void {
  }

  forgotPassword(){

    if(this.email == ''){
      alert('Please enter correct credentials')
      this.toast.error('Please enter correct credentials')
      return;
    }


    this.auth.forgotPassword(this.email);
    this.email = '';
  }

}
