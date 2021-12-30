import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/apiService/movie.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})

export class RandomComponent implements OnInit {

  constructor(private movie: MovieService) { }

  ngOnInit(): void {
    this.InitMaxMovies()
  }

  randomResult: any;
  latest: any;

  InitMaxMovies() {
    this.movie.GetLatest().subscribe(
      {
        next: (data:any) => this.latest = data,
        error: (e) => console.log("Erreur dans InitMaxMovies")
      }
    );
  }

  RandomMovie(max: number, retries?: number): any {
    let id = Math.floor(Math.random()*max)+1;
    console.log("Nombre max " + max);
    this.movie.FindMovie(id).subscribe({
      next: (data:any) => {
        this.randomResult = data;
      },
      error: (e) => {
        console.log('HTTP Error '+retries);
        if( retries == undefined ) retries = 0;
        if( ++retries < 3 ) { this.RandomMovie(max, retries) }
      }
      });
  }

}
