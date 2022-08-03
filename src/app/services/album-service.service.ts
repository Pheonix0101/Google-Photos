import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import Album from '../models/album';
import Photo from '../models/photo';

@Injectable({
  providedIn: 'root',
})
export class AlbumServiceService {
  token: any;

  selectedAlbumID!: string;

  albumPhotoList: Album[] = [];
  albumMediaItems: Photo[] = [];
  constructor(private _http: HttpClient) {}

  async createAlbum(name: string): Promise<void> {
    this.token = localStorage.getItem('token');

    const response = await axios.post(
      'https://photoslibrary.googleapis.com/v1/albums',

      {
        album: {
          title: name,
        },
      },
      {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
      }
    );

    console.warn(response);
    const val = response.data;
    this.albumPhotoList.push(
      new Album(
        val.coverPhotoBaseUrl,
        val.coverPhotoMediaItemId,
        val.id,
        val.isWriteable,
        val.mediaItemsCount,
        val.productUrl,
        val.title
      )
    );
  }

  async addMediaItemToAlbum(photoId: string): Promise<void> {
    const responseItem = await this._http.post(
      `https://photoslibrary.googleapis.com/v1/albums/${this.selectedAlbumID}:batchAddMediaItems`,

      {
        mediaItemIds: [photoId],
      },

      {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    console.log(
      responseItem.subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.warn(error);
        }
      )
    );
  }

  async displayAlbumToUi(): Promise<void> {
    this.token = localStorage.getItem('token');

    console.log(this.token);

    const albumResponse = await axios.get(
      'https://photoslibrary.googleapis.com/v1/albums',
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-type': 'application/json',
        },
      }
    );

    const albumlist: any[] = albumResponse.data.albums;
    // console.log(albumlist);

    albumlist.forEach((val: any, ind: any, arr: any[]) => {
      const albumobject = new Album(
        val.coverPhotoBaseUrl,
        val.coverPhotoMediaItemId,
        val.id,
        val.isWriteable,
        val.mediaItemsCount,
        val.productUrl,
        val.title
      );
      this.albumPhotoList.push(albumobject);
      console.log(this.albumPhotoList[0].id);
    });
  }

  async displayingAlbumPhoto(): Promise<void> {
    this.token = localStorage.getItem('token');

    const displayAlbumResponse = await axios.post(
      'https://photoslibrary.googleapis.com/v1/mediaItems:search',
      {
        pageSize: '100',
        albumId: this.selectedAlbumID,
      },
      {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    console.log(displayAlbumResponse);

    const albumsPhoto: any[] = displayAlbumResponse.data.mediaItems;
    console.warn(albumsPhoto);
    
    this.albumMediaItems = [];
    console.log(this.albumMediaItems);
    
    albumsPhoto.forEach((value: any, index: number, array: any[]) => {
      const albumPhotoObj = new Photo(
        value.baseUrl,
        value.filename,
        value.id,
        value.description,
        value.mediaMetadata.photo,
        "",
        value.mimeType,
        value.productUrl
      );

      this.albumMediaItems.push(albumPhotoObj);
    });
    console.warn(this.albumMediaItems);
  }
}
