import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../movie';

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
}
