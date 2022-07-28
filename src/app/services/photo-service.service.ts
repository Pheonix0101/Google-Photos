import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Photo from '../models/photo';
import { googleAuth } from './googleAuth.service';

@Injectable({
  providedIn: 'root',
})
export class PhotoServiceService {
  photoList: Photo[] = [];
  token: any;
  constructor(private _http: HttpClient, private _googleAuth: googleAuth) {}

  async gettingdataFromApi(): Promise<void> {
    this.token = localStorage.getItem('token');
    const response = await this._http.post(
      'https://photoslibrary.googleapis.com/v1/mediaItems:search',
      {
        pageSize: '100',
        filters: {
          dateFilter: {
            ranges: [
              {
                startDate: {
                  year: 2020,
                  month: 6,
                  day: 12,
                },
                endDate: {
                  year: 2022,
                  month: 8,
                  day: 18,
                },
              },
            ],
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-type': 'application/json',
        },
      }
    );
    console.log(
      response.subscribe(
        (res) => {
          const x = JSON.parse(JSON.stringify(res));
          console.log(x.mediaItems[0]);
          const rawList: any[] = x.mediaItems;

          rawList.forEach((obj: any, ind: number, arr: object[]) => {
            const photoObject = new Photo(
              obj.baseUrl,
              obj.filename,
              obj.id,
              obj.mediaMetadata.creationTime,
              obj.mimeType,
              obj.productUrl
            );
            this.photoList.push(photoObject);
          });
        },
        (err) => {
          console.warn(err);
        }
      )
    );
  }
}
