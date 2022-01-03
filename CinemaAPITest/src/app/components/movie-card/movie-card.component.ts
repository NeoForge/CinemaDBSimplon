import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  constructor(private route : Router) { }
  @Input() movie : any= "";
  posterUrl:string = environment.imageUrl;
  ngOnInit(): void {
    if(this.movie.poster_path){
    this.posterUrl = this.posterUrl + "w185"+this.movie.poster_path;
    }
    else
    {
      this.posterUrl = "data:image/png;base64,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";
    }
  }
  ChangeUrl()
  {
    this.route.navigate(['/detail',this.movie.id,this.movie.media_type]);
  }

}
