import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumViewComponent } from './album/album-view/album-view.component';
import { AlbumphotoComponent } from './album/albumphoto/albumphoto.component';
import { AlbumsComponent } from './album/albums/albums.component';
import { CreateFormAlbumComponent } from './album/create-form-album/create-form-album.component';
import { LoginComponent } from './login/login.component';
import { PhotosComponent } from './photos/photos.component';
import { UploadComponent } from './upload/upload.component';

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
