import { Component, OnInit } from '@angular/core';
import { User, Auth, getAuth } from 'firebase/auth';
import { googleAuth } from '../services/googleAuth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: any;
  auth = getAuth();
  constructor(private _fService: googleAuth) {}
  ngOnInit(): void {
    this.user = this._fService.user;

    // this.auth.onAuthStateChanged
    console.warn('login component is running');

    // console.log(this.user);
    console.log(this._fService.user);
  }
  async onGoogle() {
    await this._fService.signInWithGoogle();
    // window.location.reload();
    

    console.log(this._fService.user);
    console.log('log In.....');
  }
  onOut() {
    this._fService.signOutt();
    window.location.reload();
    // console.warn('logged Out');
    // this.user != this._fService.user
  }
}
