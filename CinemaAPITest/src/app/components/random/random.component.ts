import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/apiService/movie.service';
import { Movie } from 'src/app/movie';
import { environment } from 'src/environments/environment';

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
        this.randomResult.poster_path = environment.imageUrl+"/w185/"+this.randomResult.poster_path
      },
      error: (e) => {
        console.log('HTTP Error '+retries);
        if( retries == undefined ) retries = 0;
        if( ++retries < 3 ) { this.RandomMovie(max, retries) }
      }
      });
  }

}
