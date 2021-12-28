import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http : HttpClient) { }


  //CRUD for themoviedb
  //Read
  read = (id:number) => {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${environment.apiKey}`);
  }
  test = () => {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=07dd7359e1dadfa94d57a40931b9bf32&with_cast=1136406`);
  }
  //Get Cast of movie 
  getCast = (id:number) => {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${environment.apiKey}`);
  }
  //Get All Actor
  getAllActor = () => {
    return this.http.get(`https://api.themoviedb.org/3/person/popular?api_key=${environment.apiKey}&page=2`) as any;
  }
  getAllActorByPage = (page:number) => {
    return this.http.get(`https://api.themoviedb.org/3/person/popular?api_key=${environment.apiKey}&page=${page}`) as any;
  }
  //GetMovieByActor
  getMovieByActor = (id:number,page : number) => {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${environment.apiKey}&with_cast=${id}&page=${page}`) as any;
  }
}
