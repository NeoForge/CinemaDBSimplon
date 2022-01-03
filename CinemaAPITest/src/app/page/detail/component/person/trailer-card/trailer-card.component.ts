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
  ngOnInit(): void {
  }
  ChangeUrl()
  {
    this.router.navigate(['/detail',this.data.id,this.data.media]);
  }

}
