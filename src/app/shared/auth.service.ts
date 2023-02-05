import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import {GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'
import { Router } from '@angular/router'
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router, private toast: HotToastService) { }

  // login method
  login(email : string, password : string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( res =>{
        localStorage.setItem('token','true')
        this.router.navigate(['dashboard']);

        if(res.user?.emailVerified == true){
          this.toast.success('Logged in Succesfully!');
          this.router.navigate(['dashboard']);
        } else{
          this.toast.info('Need to verify email');
          this.router.navigate(['/verify-email'])
        }




    }, err =>{
        this.toast.error('Please enter correct credentials.')
        // alert('Please enter login credentials.');
        this.router.navigate(['/login']);
    })
  }

  // register method
  register(email : string, password : string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( res =>{
      // alert('Registration Successful');
      this.toast.success('Registration Successful')
      this.router.navigate(['/login']);
      this.SendVerficationEmail(res.user);
    }, err =>{
      this.toast.error('Please enter atleast 6 characters')
      // alert(err.message);
      this.router.navigate(['/register']);

    })
  }


  //sign out
  logout(){
    this.fireauth.signOut().then( () =>{
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }, err => {
      this.toast.error('Something went wrong')
      // alert(err.message);
    })
  }

  //forgot password
  forgotPassword(email: string){
    this.fireauth.sendPasswordResetEmail(email).then( () =>{
      this.router.navigate(['/verify-email']);
    }, err =>{
      this.toast.error('Something went wrong')
      // alert('Something went wrong')
    })

  }

  // Send Email Verification
  SendVerficationEmail(user: any){

    this.fireauth.currentUser.then(u => u?.sendEmailVerification())
      .then(() =>{
        this.router.navigate(['/verifyEmail']);
      }, (err: any) =>{
        this.toast.error('Something went wrong, Please enter correct credentials.')
      })

  }


  // signinwithgoogle

  googleSignIn(){
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res =>{
      this.router.navigate(['/dashboard']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));
    }, err =>{
      alert(err.message);
    })
  }


  IsloggedIn(){
    return !!localStorage.getItem('token');
  }



}
