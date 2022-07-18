export default class Photo{
    baseUrl: string;
    filename: string;
    id:  string;
    // mediaMetadata: {creationTime: string};
    time:string;
    mimeType: string;
    productUrl: string;
    
    constructor(baseUrl: string,
        filename: string,
        id:  string,
        time:string,
        // mediaMetadata: {creationTime: string},
        mimeType: string,
        productUrl: string,){
            this.baseUrl = baseUrl;
            this.filename = filename;
            this.id=id;
            this.time=time;
            // this.mediaMetadata=mediaMetadata;
            this.mimeType=mimeType;
            this.productUrl=productUrl;
        }
}