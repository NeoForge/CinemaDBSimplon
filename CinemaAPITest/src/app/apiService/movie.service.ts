import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers : new HttpHeaders('content-type:application/json')
}

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  multiSearch(query: string,page : number ) {
    return this.http.get(`${environment.apiUrl}/search/multi?query=${query}&api_key=${environment.apiKey}&page=${page}`, httpOptions);
  }
  FindAllMovieByActorID(id : number,page : number) {
    return this.http.get(`${environment.apiUrl}/person/${id}/movie_credits?api_key=${environment.apiKey}&page=${page}`, httpOptions);
  }
  FindMovie(id:number) {
    //let query:string = `${environment.apiUrl}/movie/749?api_key=${environment.apiKey}`;
    let query=`${environment.apiUrl}/movie/${id}?api_key=${environment.apiKey}&language=en-US`;
    console.log("query="+query);
    return this.http.get(query, httpOptions);
  }
  GetLatest() {
    let query:string = `${environment.apiUrl}/movie/latest?api_key=${environment.apiKey}`;
    console.log("getlatest"+query);
    return this.http.get(query, httpOptions);
  }
  GetPopulars() {
    let query:string = `${environment.apiUrl}/movie/popular?api_key=${environment.apiKey}&language=fr-FR,en-US&page=1`;
    console.log("getPopulars"+query);
    return this.http.get(query,httpOptions);
  }
  GetGenres() {
    let query:string = `${environment.apiUrl}/genre/movie/list?api_key=${environment.apiKey}&language=fr-FR`;
    console.log("getGenre"+query);
    return this.http.get(query,httpOptions);
  }
  findAllTvShowByActorID(id : number,page : number) {
    return this.http.get(`${environment.apiUrl}/person/${id}/tv_credits?api_key=${environment.apiKey}&page=${page}`);
  }
  FindMovieById(id : number) {
    return this.http.get(`${environment.apiUrl}/movie/${id}?api_key=${environment.apiKey}`);
  }
  FindPeopleById(id : number) {
    return this.http.get(`${environment.apiUrl}/person/${id}?api_key=${environment.apiKey}`);
  }
  FindTVShowById(id : number) {
    return this.http.get(`${environment.apiUrl}/tv/${id}?api_key=${environment.apiKey}`);
  }
  FindVideosByMovie(id: number) {
    return this.http.get(`${environment.apiUrl}/movie/${id}/videos?api_key=${environment.apiKey}`);
  }
  FindVideosByTVShow(id: number) {
    return this.http.get(`${environment.apiUrl}/tv/${id}/videos?api_key=${environment.apiKey}`);
  }
  findActorInMovie(id : number) {
    return this.http.get(`${environment.apiUrl}/movie/${id}/credits?api_key=${environment.apiKey}`);
  }
  findActorInTVShow(id : number) {
    return this.http.get(`${environment.apiUrl}/tv/${id}/credits?api_key=${environment.apiKey}`);
  }
}
