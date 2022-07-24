import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UploadServiceService } from '../services/upload-service.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  public static selectedFile: File | null = null;
  constructor(private _http: HttpClient, private _uploadService:UploadServiceService) {}

  ngOnInit(): void {
   
  }
  onFileSelected(event: any) {
    UploadComponent.selectedFile = <File>event.target.files[0];
  }
  onUpload() {
    this._uploadService.uploadingDataToApi();
    
    // const fd = new FormData();
    // fd.append('image', this.selectedFile!, this.selectedFile?.name);
  //   const responce = this._http.post(
  //     'https://photoslibrary.googleapis.com/v1/uploads',

  //     {
  //       Header: {
  //         'Content-type': 'application/octet-stream',
  //         'X-Goog-Upload-Content-Type': 'image/jpeg, image/png',
  //         'X-Goog-Upload-Protocol': 'raw',
  //       },
  //       body: UploadComponent.selectedFile,
  //     }
  //   );
  //   console.log(
  //     responce.subscribe(
  //       (res) => {
  //         console.log(res);
  //       },
  //       (err) => {
  //         console.warn(err);
  //       }
  //     )
  //   );
  // }
}
}
