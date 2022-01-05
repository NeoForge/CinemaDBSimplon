import { Genres } from "./genres";

export class Movie {
    id: number = 0;
    name: string = "";
    title: string = "";
    adult: boolean = false;
    poster_path: string = "";
    media_type: string = "";
    overview: string = "";
    original_title: string = "";
    original_language: string = "";
    vote_average: number = 0;
    release_date: string = "1970-01-27";
    genres: Array<Genres> = [];
}
