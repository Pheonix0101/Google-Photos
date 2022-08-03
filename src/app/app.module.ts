import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { HeaderComponent } from './header/header.component';
import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component';
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
    ReactiveFormsModule,
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
