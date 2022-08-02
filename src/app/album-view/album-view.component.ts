import { Component, OnInit } from '@angular/core';
import { AlbumServiceService } from '../services/album-service.service';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.css']
})
export class AlbumViewComponent implements OnInit {
  albumViewList:any[] =[];
  constructor(private _albumService:AlbumServiceService) { }

  ngOnInit(): void {
    this.albumViewList = this._albumService.albumMediaItems;
    console.log(this.albumViewList);
    
  }


}
