import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/apiService/movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private service: MovieService, private route: ActivatedRoute,private router : Router) { }


  type: string = this.route.snapshot.paramMap.get('type') as string;
  id: number = parseInt(this.route.snapshot.paramMap.get('id') as string);
  data: any = {};
  image :string = "https://image.tmdb.org/t/p/w500";

  ngOnInit(): void {
    switch (this.type) {
      case 'movie':
        {
          this.service.FindMovieById(this.id).subscribe((data:any) => {
            this.data = data;
            this.image = this.image + data.poster_path;
          });
          break;
        }
      case 'tv':
        {
          this.service.FindTVShowById(this.id).subscribe((data:any) => {
            this.data = data;
            this.image = this.image + data.poster_path;
          });
          break;
        }
      case 'person':
        {
          this.service.FindPeopleById(this.id).subscribe((data:any) => {
            this.data = data;
            this.image = this.image + data.profile_path;
          }
          );
          break;
        }
    }
  }

  goBack() {
    this.router.navigateByUrl("/search");
  }
}
