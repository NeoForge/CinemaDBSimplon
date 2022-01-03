import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-card-detail',
  templateUrl: './actor-card-detail.component.html',
  styleUrls: ['./actor-card-detail.component.css']
})
export class ActorCardDetailComponent implements OnInit {

  constructor(private router : Router) { }
  @Input() data: any;
  ngOnInit(): void {
  }
  
  ChangeUrl()
  {
    this.router.navigate(['/']).then(()=>{this.router.navigate(['/detail',this.data.id,"person"])});
  }

}
