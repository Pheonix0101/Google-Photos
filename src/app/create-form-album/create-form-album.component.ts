import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-form-album',
  templateUrl: './create-form-album.component.html',
  styleUrls: ['./create-form-album.component.css']
})
export class CreateFormAlbumComponent implements OnInit {

  val:any;
  reactiveForm!:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.reactiveForm= new FormGroup({
      'albumName': new FormControl(null,Validators.required)
    })
  }
  
  onSubmit(){
    const val= this.reactiveForm.value
    console.log(val);
    
  }
}
