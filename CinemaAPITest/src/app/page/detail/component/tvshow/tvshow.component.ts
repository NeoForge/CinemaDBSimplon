import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {

  constructor() { }
  @Input() data: any = "";
  ngOnInit(): void {
  }

}
