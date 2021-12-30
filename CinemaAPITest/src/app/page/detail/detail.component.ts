import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/apiService/movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private service: MovieService, private route: ActivatedRoute) { }
  type: string = this.route.snapshot.paramMap.get('type') as string;
  id: number = parseInt(this.route.snapshot.paramMap.get('id') as string);
  data: any = {};
  ngOnInit(): void {
    switch (this.type) {
      case 'movie':
        {
          this.service.FindMovieById(this.id).subscribe(data => {
            this.data = data;
          });
          break;
        }
      case 'tv':
        {
          this.service.FindTVShowById(this.id).subscribe(data => {
            this.data = data;
          });
          break;
        }
      case 'person':
        {
          this.service.FindPeopleById(this.id).subscribe(data => {
            this.data = data;
          }
          );
          break;
        }
    }
  }
}
