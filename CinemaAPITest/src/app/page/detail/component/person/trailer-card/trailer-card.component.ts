import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trailer-card',
  templateUrl: './trailer-card.component.html',
  styleUrls: ['./trailer-card.component.css']
})
export class TrailerCardComponent implements OnInit {

  constructor(private router : Router) { }
  @Input() data:any;
  urlToLoad="";
  ngOnInit(): void {
    this.urlToLoad="detail/"+this.data.id+"/"+this.data.media
  }
  ChangeUrl()
  {
    this.router.navigate(['/']).then(()=>{this.router.navigate(['/detail',this.data.id,this.data.media])});
  }

}
