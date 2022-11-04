import { Component, Input, OnInit } from '@angular/core';
import { Albums } from '../albums';

@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.scss']
})
export class AlbumInfoComponent implements OnInit {

  @Input() album!: Albums;

  constructor() { }

  ngOnInit(): void {
  }

}
