import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlbumServiceService } from '../services/album-service.service';

@Component({
  selector: 'app-create-form-album',
  templateUrl: './create-form-album.component.html',
  styleUrls: ['./create-form-album.component.css'],
})

// this class is called when user try to create a new Album.
export class CreateFormAlbumComponent implements OnInit {
  public static val: string;
  reactiveForm!: FormGroup;
  form!: FormGroup;

  constructor(
    private _albumService: AlbumServiceService,
    private _roter: Router
  ) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      albumName: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    CreateFormAlbumComponent.val = this.reactiveForm.value.albumName;
    this._albumService.createAlbum(CreateFormAlbumComponent.val);
    console.log(CreateFormAlbumComponent.val);
    this._roter.navigate(['/Album']);
  }
}
