import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email : string = '';
  password : string = '';




  constructor(private auth: AuthService, private toast: HotToastService) { }

  ngOnInit(): void {
  }
  register(){

    if(this.email == ''){
      this.toast.error('Please enter correct credentials');
      return;
    }

    if(this.password == ''){
      this.toast.error('Please enter atleast 6 characters');
      return;
    }

    this.auth.register(this.email,this.password);
    this.email ='';
    this.password = '';



  }

}
