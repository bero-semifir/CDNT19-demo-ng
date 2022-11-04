import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.scss']
})
export class CompteurComponent implements OnInit {

  @Input() nombre!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
