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

  ngOnInit() {
    this.searchValue = "Tom Holland";
    this.Search();
   }

  searchValue: string = "";
  searchResults: any = [];
  Search() {
    if (this.searchValue.length > 0) {
      this.movieSearchResults = [];
      this.actorSearchResults = [];
      this.movieService.multiSearch(this.searchValue, 1).subscribe((data:any) => {
        this.searchResults = data.results;
        if(this.searchResults.length >= data.total_results-1){
          this.SortSearch();
        }
        for(let i =2; i<=data.total_pages; i++){
          this.movieService.multiSearch(this.searchValue, i).subscribe((data:any) => {
            this.searchResults = this.searchResults.concat(data.results);
            console.log(this.searchResults);
            if(this.searchResults.length >= data.total_results-1){
              this.SortSearch();
            }
          });
        }
      });
    }
    else
    {
      console.log("No search value");
    }

  }

  actorSearchResults: any = [];
  movieSearchResults: any = [];
  SortSearch()
  {
    for(let i = 0 ;i<this.searchResults.length;i++)
    {
      if(this.searchResults[i].media_type == "person")
      {
        this.actorSearchResults.push(this.searchResults[i]);
      }
      else
      {
        this.movieSearchResults.push(this.searchResults[i]);
      }
    }
    console.log(this.actorSearchResults);
    console.log(this.movieSearchResults);
    
  }
}

