import { Component, OnInit } from '@angular/core';
import { AlbumServiceService } from '../services/album-service.service';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.css']
})

// this class contains the MediaItem of Album
export class AlbumViewComponent implements OnInit {
  albumViewList:any[] =[];
  constructor(private _albumService:AlbumServiceService) { }

 async ngOnInit(): Promise<void> {
  await this._albumService.displayingAlbumPhoto();
    this.albumViewList = this._albumService.albumMediaItems;
  }


}
