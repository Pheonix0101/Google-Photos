import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumServiceService } from '../services/album-service.service';
import { PhotoServiceService } from '../services/photo-service.service';

@Component({
  selector: 'app-albumphoto',
  templateUrl: './albumphoto.component.html',
  styleUrls: ['./albumphoto.component.css'],
})

// this class is responsible for addding MediaItem into Album.
export class AlbumphotoComponent implements OnInit {
  addToAlbumList: any[] = [];
  photoId: string = '';
  constructor(
    private _pService: PhotoServiceService,
    private _albumService: AlbumServiceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._pService.gettingdataFromApi();
    this.addToAlbumList = this._pService.photoList;
  }

  addToAlbum(id: string) {
    console.log(id);
    this.photoId = id;
  }
  addSelectedPhotoToAlbum() {
    console.warn(this.photoId);
    this._albumService.addMediaItemToAlbum(this.photoId);
    this._router.navigate(['/Album']);
  }
}
