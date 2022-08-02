export default class Album {
  coverPhotoBaseUrl: string;
  coverPhotoMediaItemId: string;
  id: string;
  isWriteable: boolean;
  mediaItemsCount: string;
  productUrl: string;
  title: string;

  constructor(
    coverPhotoBaseUrl: string,
    coverPhotoMediaItemId: string,
    id: string,
    isWriteable: boolean,
    mediaItemsCount: string,
    productUrl: string,
    title: string
  ) {
    this.coverPhotoBaseUrl = coverPhotoBaseUrl;
    this.coverPhotoMediaItemId = coverPhotoMediaItemId;
    this.id = id;
    this.isWriteable = isWriteable;
    this.mediaItemsCount = mediaItemsCount;
    this.productUrl = productUrl;
    this.title = title;
  }
}


