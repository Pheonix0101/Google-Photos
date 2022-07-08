import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  Gurl =
    'https://play.google.com/store/apps/details?id=com.google.android.apps.photos&referrer=utm_source%3Dphotosweb%26utm_medium%3Dpromo%26utm_term%3Dempty';

  Aurl = 'https://apps.apple.com/app/apple-store/id962194608';
  constructor() {}

  ngOnInit(): void {}

  googleStore() {
    window.open(this.Gurl, '_blank');
  }

  appStore() {
    window.open(this.Aurl, '_blank');
  }
}
