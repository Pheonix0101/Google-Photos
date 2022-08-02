import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateFormAlbumComponent } from './create-form-album/create-form-album.component';
import { UploadComponent } from './upload/upload.component';
import { AlbumphotoComponent } from './albumphoto/albumphoto.component';
import { AlbumViewComponent } from './album-view/album-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    HeaderComponent,
    AlbumsComponent,
    LoginComponent,
    CreateFormAlbumComponent,
    UploadComponent,
    AlbumphotoComponent,
    AlbumViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}

// '247104778966-attan4n4ug2ateuo5ja18vmfs6lm0grm.apps.googleusercontent.com'
