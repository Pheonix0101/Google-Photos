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

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
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
  public static user: User


  constructor() {}

  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');

    return signInWithPopup(this.auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(`credential = ${credential}`);

        PhotosService.abtoken = credential?.accessToken;
        if (PhotosService.abtoken) {
          localStorage.setItem('token', PhotosService.abtoken);
        }

        // console.log(`token = ${PhotosService.abtoken}`);

        // The signed-in user info.
        const user = result.user;
        // console.log(provider);
        // console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  signOut() {
    return this.signOut;
  }
}
