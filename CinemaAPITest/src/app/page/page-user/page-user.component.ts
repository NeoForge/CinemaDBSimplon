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

  ngOnInit() { }

  searchValue: string = "";
  searchResults: any = [];
  Search() {
    if (this.searchValue.length > 0) {
      this.movieService.multiSearch(this.searchValue, 1).subscribe((data:any) => {
        this.searchResults = data.results;
        console.log(data);
        for(let i =2; i<=data.total_pages; i++){
          this.movieService.multiSearch(this.searchValue, i).subscribe((data:any) => {
            this.searchResults = this.searchResults.concat(data.results);
            console.log(this.searchResults);
          });
        }
      });
    }
    else
    {
      console.log("No search value");
    }

  }
}
