import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css']
})
export class ActorCardComponent implements OnInit {

  constructor() { }
  @Input() actor : any= "";
  Name: string = "";
  popularity: number = 0;
  knowForDepartment: string = "";
  profilePictureUrl:string = environment.imageUrl;
  ngOnInit(): void {
    console.log(this.actor);
    this.Name = this.actor.name;
    this.popularity = this.actor.popularity;
    this.knowForDepartment = this.actor.known_for_department;
    this.profilePictureUrl = this.profilePictureUrl + "w185" + this.actor.profile_path;
  }

}
