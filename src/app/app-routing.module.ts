import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { CreateFormAlbumComponent } from './create-form-album/create-form-album.component';
import { ExploreComponent } from './explore/explore.component';
import { LoginComponent } from './login/login.component';
import { PhotosComponent } from './photos/photos.component';
import { SharingComponent } from './sharing/sharing.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {path:'Login', component: LoginComponent},
  {path:'Photos', component: PhotosComponent},
  {path:'upload', component: UploadComponent},
  {path: 'Explore',component:ExploreComponent},
  {path:'Sharing', component:SharingComponent},
  {path:'Album', component:AlbumsComponent},
  {path: 'createAlbum', component:CreateFormAlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
