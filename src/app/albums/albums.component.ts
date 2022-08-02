import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumServiceService } from '../services/album-service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albumListCopy: any[] = [];
  constructor(
    private _albumService: AlbumServiceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._albumService.displayAlbumToUi();
    this.albumListCopy = this._albumService.albumPhotoList;
    this._albumService.displayingAlbumPhoto();
  }
  addPhotoToThisAlbum(id: string) {
    this._albumService.selectedAlbumID = id;
    this._router.navigate(['/albumPhoto']);
  }
}
