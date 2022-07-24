import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { SharingComponent } from './sharing/sharing.component';
import { AlbumsComponent } from './albums/albums.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateFormAlbumComponent } from './create-form-album/create-form-album.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    HeaderComponent,
    ExploreComponent,
    SharingComponent,
    AlbumsComponent,
    LoginComponent,
    CreateFormAlbumComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}

// '247104778966-attan4n4ug2ateuo5ja18vmfs6lm0grm.apps.googleusercontent.com'
