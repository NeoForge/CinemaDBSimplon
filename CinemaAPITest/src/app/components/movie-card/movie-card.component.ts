import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  constructor() { }
  @Input() movie : any= "";
  media_Type: string = "";
  title: string = "";
  original_title: string = "";
  overview: string = "";
  releaseDate: string = "";
  posterUrl:string = environment.imageUrl;
  popularity: number = 0;
  originalLanguage : string = "";
  idOfOverview : string = "";
  ngOnInit(): void {
    console.log(this.movie);
    this.media_Type = this.movie.media_type;
    this.title = this.movie.title;
    this.original_title = this.movie.original_title;
    this.overview = this.movie.overview;
    this.releaseDate = this.movie.release_date;
    this.popularity = this.movie.popularity;
    this.originalLanguage = this.movie.original_language;
    this.posterUrl = this.posterUrl + "w185" + this.movie.poster_path;
    this.idOfOverview="#"+this.movie.id;
  }

}
