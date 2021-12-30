import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http : HttpClient) { }

  multiSearch(query: string,page : number ) {
    return this.http.get(`${environment.apiUrl}/search/multi?query=${query}&api_key=${environment.apiKey}&page=${page}`);
  }
  FindAllMovieByActorID(id : number,page : number) {
    return this.http.get(`${environment.apiUrl}/person/${id}/movie_credits?api_key=${environment.apiKey}&page=${page}`);
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

}
