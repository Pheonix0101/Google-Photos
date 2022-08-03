import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumServiceService } from '../../services/album-service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
// this class is the Dashboard of Album 
export class AlbumsComponent implements OnInit {
  albumListCopy: any[] = [];
  constructor(
    private _albumService: AlbumServiceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._albumService.displayAlbumToUi();
    this.albumListCopy = this._albumService.albumPhotoList;
  }
  addPhotoToThisAlbum(id: string) {
    this._albumService.selectedAlbumID = id;
    this._router.navigate(['/albumPhoto']);
  }

  viewAlbum(albumId: string) {
    this._albumService.selectedAlbumID = albumId;
    this._router.navigate(['/albumView']);
  }
}
