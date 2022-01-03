import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/apiService/movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private service: MovieService, private route: ActivatedRoute, private router: Router) { }


  type: string = this.route.snapshot.paramMap.get('type') as string;
  id: number = parseInt(this.route.snapshot.paramMap.get('id') as string);
  data: any = {};
  videoUrl = "";
  image: string = "https://image.tmdb.org/t/p/w500";

  ngOnInit(): void {
    switch (this.type) {
      case 'movie':
        {
          this.InitMovie();
          break;
        }
      case 'tv':
        {
          this.InitTVShow();
          break;
        }
      case 'person':
        {
          this.InitPerson();
          break;
        }
    }

  }

  goBack() {
    this.router.navigateByUrl("/search");
  }
  InitMovie() {
    this.service.FindMovieById(this.id).subscribe((data: any) => {
      this.data = data;
      this.data.image = this.image + data.poster_path;
      this.service.FindVideosByMovie(this.id).subscribe((data: any) => {
        this.data.videos = data.results;
        if (this.data.videos.length > 0) {
          this.data.videoUrl = "https://www.youtube.com/embed/" + data.results[0].key;
        }
        else
        {
          this.data.videoUrl = "";
        }
      });
    });
  }
  InitTVShow() {
    this.service.FindTVShowById(this.id).subscribe((data: any) => {
      this.data = data;
      this.data.image = this.image + data.poster_path;
      this.service.FindVideosByTVShow(this.id).subscribe((data: any) => {
        this.data.videos = data.results;
        if (this.data.videos.length > 0) {
          this.data.videoUrl = "https://www.youtube.com/embed/" + data.results[0].key;
        }
        else
        {
          this.data.videoUrl = "";
        }
      });
    });
  }
  InitPerson(){
    this.service.FindPeopleById(this.id).subscribe((data: any) => {
      this.data = data;
      if(data.profile_path != null){this.data.image = this.image + data.profile_path;}else{this.data.image="";}
      this.data.TrailerMovieArray = [];
      this.data.TrailerTVArray = [];
      this.findAllMovieByPerson(this.id);
      this.findAllTvByPerson(this.id);
    });
  }
  findAllMovieByPerson(id: number) {
    this.service.FindAllMovieByActorID(id,1).subscribe((data: any) => {
      let temp = data.cast;
      let index = 0;
      
      if(temp.length>5){ index = 5}else{ index = temp.length};
      for(let i = 0; i < index; i++){
        this.service.FindVideosByMovie(temp[i].id).subscribe((data: any) => {
          let tempUrl = "";
          if(data.results.length>0){tempUrl = "https://www.youtube.com/embed/" + data.results[0].key;}else{tempUrl = "";}
          this.data.TrailerMovieArray.push( {
            'title' : temp[i].title,
            "url" : tempUrl,
            "media" : "movie",
            "id" : temp[i].id
          });
        });
      }
      console.log(this.data);
    });
  }
  findAllTvByPerson(id: number) {
    this.service.findAllTvShowByActorID(id,1).subscribe((data: any) => {
      let temp = data.cast;
      let index = 0;
      if(temp.length>5){ index = 5}else{ index = temp.length};
      for(let i = 0; i < index; i++){
        this.service.FindVideosByTVShow(temp[i].id).subscribe((data: any) => {
          let tempUrl = "";
          if(data.results.length>0){tempUrl = "https://www.youtube.com/embed/" + data.results[0].key;}else{tempUrl = "";}
          this.data.TrailerTVArray.push( {
            'title' : temp[i].name,
            "url" : tempUrl,
            "media" : "tv",
            "id" : temp[i].id
          });
        });
      }
      console.log(this.data);
    });
  }
}
