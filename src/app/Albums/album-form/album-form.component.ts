import { Component, OnInit } from '@angular/core';
import {
  FormGroup,   // le conteneur du formulaire (un tableau d'input de formulaire)
  FormControl, // un objet qui controle un input de formulaire
  Validators,  // pour valider les inputs
  FormArray,   // pour grouper des champs de formulaire
} from '@angular/forms';
import { Albums } from '../albums';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.scss']
})
export class AlbumFormComponent implements OnInit {

  form: FormGroup;

  constructor(private albumService: AlbumsService) {
    this.form = new FormGroup({
      title: new FormControl("Mon Album", [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  createAlbum(){
    let newAlbum = this.form.value as Albums;
    newAlbum.userId = 1;
    if(this.form.valid){
      console.log(newAlbum);
      this.albumService.createAlbum(newAlbum)
        .subscribe(resp => console.log(resp));
    }
  }

}
