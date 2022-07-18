import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/googleAuth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _fService: PhotosService ) { }
  ngOnInit(): void {
    this.user
  }
 user:any;
  onGoogle(){
    this._fService.signInWithGoogle();
  }
  onOut() {
    this._fService.signOut();
    console.warn("logged Out");
    
  }
}
