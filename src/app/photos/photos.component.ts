import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Photo from '../models/photo';
import { googleAuth } from '../services/googleAuth.service';
import { PhotoServiceService } from '../services/photo-service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  photoList2: Photo[] = [];

  constructor(
    private _http: HttpClient,
    private _pService: PhotoServiceService
  ) {}

  async ngOnInit(): Promise<void> {
    this._pService.gettingdataFromApi();
    this.photoList2 = this._pService.photoList;
  }
}
