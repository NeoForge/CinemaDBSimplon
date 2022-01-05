import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie';

@Component({
  selector: 'app-rating-decimal',
  templateUrl: './rating-decimal.component.html',
  styleUrls: ['./rating-decimal.component.css']
})
export class RatingDecimalComponent implements OnInit {

  @Input() movie = new Movie; //Permet de passer movie.vote_average au template

  constructor() { }

  ngOnInit(): void {
  }

}
