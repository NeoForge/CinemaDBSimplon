import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/apiService/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private service : MovieService,private route : ActivatedRoute) { }

  @Input() data: any="";
  ActorArray:any=[];
  ngOnInit(): void {
  }

}
