import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import { PhotoServiceService } from './photo-service.service';
import { Token } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class googleAuth {
  firebaseConfig = {
    apiKey: 'AIzaSyDKQzNGB02Z_LiXsE1lWb11BmERHzpqZbI',
    authDomain: 'lenovoangular.firebaseapp.com',
    projectId: 'lenovoangular',
    storageBucket: 'lenovoangular.appspot.com',
    messagingSenderId: '707542293210',
    appId: '1:707542293210:web:6fd1f24b886a225b49e3e3',
  };

  app = initializeApp(this.firebaseConfig);
  db = getFirestore(this.app);

  auth = getAuth();
  public static abtoken: any = '';
  user!: User;

  constructor(private _http: HttpClient) {}

  async signInWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');
    provider.addScope(
      'https://www.googleapis.com/auth/photoslibrary.appendonly'
    );

    provider.addScope('https://www.googleapis.com/auth/photoslibrary');

    const result = signInWithPopup(this.auth, provider);
    //  ((result) => {

    // This gives you a Google Access Token. You can use it to access the Google API.
    this.auth.onAuthStateChanged;

    const credential = GoogleAuthProvider.credentialFromResult(await result);
    console.log(`credential = ${credential}`);

    googleAuth.abtoken = credential?.accessToken;
    if (googleAuth.abtoken) {
      localStorage.setItem('token', googleAuth.abtoken);
    }

    console.log(`token = ${googleAuth.abtoken}`);

    // The signed-in user info.
    this.user = (await result).user;
    // console.log(provider);
    console.log(this.user);
    // console.log(this.user.photoURL);
    // })
    // .catch((error) => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.customData.email;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   // ...
    // });
  }

  signOutt() {
    // this.auth.signOut();
    // this.user.delete();
    signOut(this.auth)
      .then((s) => {
        console.log(s);
      })
      .catch((error) => {
        console.warn(error);
      });
    this.user != this.user;
  }
}
