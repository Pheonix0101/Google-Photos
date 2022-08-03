import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumViewComponent } from './components/album/album-view/album-view.component';
import { AlbumphotoComponent } from './components/album/albumphoto/albumphoto.component';
import { AlbumsComponent } from './components/album/albums/albums.component';
import { CreateFormAlbumComponent } from './components/album/create-form-album/create-form-album.component';
import { LoginComponent } from './components/login/login.component';
import { PhotosComponent } from './components/photos/photos.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'Photos', component: PhotosComponent},
  {path:'upload', component: UploadComponent},
  {path:'Album', component:AlbumsComponent},
  {path: 'createAlbum', component:CreateFormAlbumComponent},
  {path:'albumPhoto', component: AlbumphotoComponent},
  {path:'albumView', component:AlbumViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
