import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }

  @Input() data: any="";

  ngOnInit(): void {
  }

}
