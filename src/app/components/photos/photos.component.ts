import { Component, OnInit } from '@angular/core';
import Photo from '../../models/photo';
import { PhotoServiceService } from '../../services/photo-service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
// this is the photo TimeLine view of the Application.
export class PhotosComponent implements OnInit {
  photoList2: Photo[] = [];

  constructor(private _pService: PhotoServiceService) {}

  async ngOnInit(): Promise<void> {
    await this._pService.gettingdataFromApi();
    this.photoList2 = this._pService.photoList;
  }
}
