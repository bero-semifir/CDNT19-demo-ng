import { Component, OnInit } from '@angular/core';
import { Albums } from '../albums';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss']
})
export class AlbumPageComponent implements OnInit {

  albums: Albums[] = [];

  constructor(private albumService: AlbumsService) { }

  ngOnInit(): void {
    this.albumService.getAlbums()
      .subscribe((albums) => {
        this.albums = albums;
        console.log(albums[0])
      })
  }

}
