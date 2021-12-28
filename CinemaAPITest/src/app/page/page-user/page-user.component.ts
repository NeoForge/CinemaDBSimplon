import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/apiService/movie.service';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {

  constructor(private movieService: MovieService) {

  }

  nameToSearch: string = "";
  listOfActor: any[] = [];
  isSearchingMovie: boolean = false;
  isSearchingActor: boolean = false;
  listOfMovie: any[] = [];

  ngOnInit(): void {
    this.getAllActorByPage(1);
  }
  listOfActorSearched: any[] = [];
  searchActor()
  {
    if(this.nameToSearch.length > 0)
    {
      this.isSearchingActor = true;
      this.listOfActorSearched = [];
      for(let i = 0; i < this.listOfActor.length; i++)
      {
        if(this.listOfActor[i].name.toLowerCase().includes(this.nameToSearch.toLowerCase()))
        {
          this.listOfActorSearched.push(this.listOfActor[i]);
        }
      }
    }
    else
    {
      this.isSearchingActor = false;
    }
    
  }

  clear()
  {
    this.isSearchingActor =false;
    this.isSearchingMovie = false;
  }


  getAllActorByPage(page:number)
  {
    this.movieService.getAllActorByPage(page).subscribe(
      (data: any) => {
        this.listOfActor = [];
        this.listOfActor = data.results;
        console.log(this.listOfActor);
        for(let i =2; i <= data.total_pages; i++)
        {
          this.movieService.getAllActorByPage(i).subscribe(
            (data: any) => {
              this.listOfActor = this.listOfActor.concat(data.results);
            }
          )
        }
      }
    )
  }

  searchAllMovieByActor(id: number) {
    this.movieService.getMovieByActor(id, 1).subscribe(
      (data: any) => {
        this.listOfMovie = data.results;
        this.isSearchingMovie = true;
        console.log(data);
        if (data.total_pages > 1) {
          for (let i = 2; i <= data.total_pages; i++) {
            this.movieService.getMovieByActor(id, i).subscribe(
              (data: any) => {
                this.listOfMovie = this.listOfMovie.concat(data.results);
              }
            )
          }

        }
      }
    )
  }
}
