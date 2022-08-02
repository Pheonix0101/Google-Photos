export default class Photo {
  baseUrl: string;
  filename?: string;
  id: string;
  description?: string;
  photo?: string;
  time?: string;
  mimeType: string;
  productUrl: string;

  constructor(
    baseUrl: string,
    filename: string,
    id: string,
    description: string,
    photo: string,
    time: string,
    mimeType: string,
    productUrl: string
  ) {
    this.baseUrl = baseUrl;
    this.filename = filename;
    this.id = id;
    this.description = description;
    this.photo = photo;
    this.time = time;
    this.mimeType = mimeType;
    this.productUrl = productUrl;
  }
}
