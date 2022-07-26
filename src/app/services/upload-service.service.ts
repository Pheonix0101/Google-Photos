import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UploadComponent } from '../upload/upload.component';

@Injectable({
  providedIn: 'root',
})
export class UploadServiceService {
  token: any;
  UToken: any;
  constructor(private _http: HttpClient) {}
  
  async uploadingDataToApi(): Promise<void> {
    this.token = localStorage.getItem('token');
    console.log('running');

    // const p = await this._http
    //   .get('localhost:8080/upload',
    //   {
    //    headers:{
    //     token: this.token,
    //     file: "UploadComponent.selectedFile",
    //    }
    //   })
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
    const response = await this._http.post(
      'https://photoslibrary.googleapis.com/v1/uploads',
      UploadComponent.selectedFile,

      {
        headers: {
          'Content-type': 'application/octet-stream',
          'X-Goog-Upload-Content-Type': 'image/png',
          'X-Goog-Upload-Protocol': 'raw',
          // 'Access-Control-Allow-Origin': 'http://localhost:4200',
          'Access-Control-allow-Credential': 'true',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    console.log('sunny');

    console.log(UploadComponent.selectedFile?.name);
    console.log(
      response.subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      )
    );

    const rise = await this._http.post(
      'https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate',
      {
        newMediaItems: [
          {
            description: 'item-description',
            simpleMediaItem: {
              fileName: 'UploadComponent.selectedFile?.name',
              uploadToken:
                'CAIS+QIAXrUc0Y9DewoCKErEaVHxae83wQqeihaDbp0nVZSgWFXQ3UJ5nqfufrVjzWy4c/Fnt9ApRTFCCM1fBF+oYTspgq53r8u7wLAwdh0BwBUd/4AIwtQjTWwDcl5xAjLLR++yRu+2pBgeA3rAg0N/w5E8r+ltgDLJQ7GzGZObiGvdk+XSwLviUu/EWlB+R9TK8mICLhjCND+q1of10ouhOto1jJ0VZVAWvy0bsjl8FBjpbStQSqIGULzx8GzX6YocnoRVQQs7DP9Qxe3Iu117xbKeC/W/3vdKaHm093TD+0qJwgOfKv8fjRGnRAKjfUrAF3y0zjPVya/PSRBPdvnHKs/Cs4+i8599P/8+DBNqlpfV6FSzs+zFZC6r6slHI35iUhvMQhQYkJu3Voh8QBpek2HyDtrnEdAmsvjkzS0NIn8JetAqoqPSttoerkxXFx/vcOcC+NEW6vjPw4eVqtbH9yl7DeLRNnHrtIRNqKGK7vSociJnXAkKu9GHhg',
            },
          },
        ],
      },
      {
        headers: {
          'Content-type': 'application/json',
          // 'Access-Control-Allow-Origin': 'http://localhost:4200',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-allow-Credential': 'true',

          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',

          Authorization: `Bearer ${this.token}`,
        },
      }

      //   let Headers = new HttpHeaders({
      //     'Accept': 'application/json',
      //     'zumo-api-version': '2.0.0'
      // });
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
