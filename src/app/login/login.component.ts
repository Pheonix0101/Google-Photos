import { Component, OnInit } from '@angular/core';
import { User,Auth, getAuth } from 'firebase/auth';
import { PhotosService } from '../services/googleAuth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user!: User;
  auth = getAuth();
  constructor(private _fService: PhotosService) {}
  ngOnInit(): void {
    this.user = this._fService.user;
    // this.auth.onAuthStateChanged
    // console.log(this.user);
  }
  onGoogle() {
    
    this._fService.signInWithGoogle();
  }
  onOut() {
    this._fService.signOutt();
    // console.warn('logged Out');
    this.user != this._fService.user
  }
}
