import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor() { }

  @Input() movie = new Movie;

  ngOnInit(): void {
  }

}
