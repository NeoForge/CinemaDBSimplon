import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from 'src/app/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})

export class MovieCardComponent implements OnInit {

  constructor() { }

  @Input() movie = new Movie;

  ngOnInit(): void { }

}
