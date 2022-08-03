import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadServiceService } from '../services/upload-service.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
// here we upload the Image from our System to Our local then with the
//  help of Upload-service we will upload it to the Google Photo server.
export class UploadComponent implements OnInit {
  public static selectedFile: File | null = null;
  constructor(
    private _uploadService: UploadServiceService,
    private _route: Router
  ) {}

  ngOnInit(): void {}
  onFileSelected(event: any) {
    UploadComponent.selectedFile = <File>event.target.files[0];
  }
  async onUpload() {
    await this._uploadService.uploadingDataToApi();
    this._route.navigate(['/Photos']);
  }
}
