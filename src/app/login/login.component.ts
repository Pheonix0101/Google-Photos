import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!:SocialUser;

  constructor(private _socialAuthService:SocialAuthService ) { }

  ngOnInit(): void {
    this._socialAuthService.authState.subscribe(
      (user) => {
        this.user=user;
      }
    )
  }

  signWithGoogle():any{
    this._socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(){
    this._socialAuthService.signOut();
  }
}
