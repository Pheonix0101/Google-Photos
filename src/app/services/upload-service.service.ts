import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { UploadComponent } from '../upload/upload.component';

@Injectable({
  providedIn: 'root',
})
export class UploadServiceService {
  token: any;
  uToken: any;

  constructor(private _http: HttpClient) {}

  async uploadingDataToApi(): Promise<void> {
    this.token = localStorage.getItem('token');

    const response = await axios
      .post(
        'https://photoslibrary.googleapis.com/v1/uploads',
        UploadComponent.selectedFile,

        {
          headers: {
            'Content-type': 'application/octet-stream',
            'X-Goog-Upload-Content-Type': 'image/png, image/jpeg',
            'X-Goog-Upload-Protocol': 'raw',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            Authorization: `Bearer ${this.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        this.uToken = res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    const rise = await this._http.post(
      'https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate',
      {
        newMediaItems: [
          {
            description: 'item-description',
            simpleMediaItem: {
              fileName: UploadComponent.selectedFile?.name,
              uploadToken: this.uToken,
            },
          },
        ],
      },
      {
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-allow-Credential': 'true',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    console.log(
      rise.subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.warn(err);
        }
      )
    );
  }
}
