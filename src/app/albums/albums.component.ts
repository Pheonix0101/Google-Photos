import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  list:any[] =[];
  constructor() { }

  ngOnInit(): void {
  }

  createAlbum(){
  console.warn('purushottam');
  
  
  
  }

}
