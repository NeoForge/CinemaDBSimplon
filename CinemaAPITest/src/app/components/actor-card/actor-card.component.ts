import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css']
})
export class ActorCardComponent implements OnInit {

  constructor(private route : Router) { }
  @Input() actor : any= "";
  profilePictureUrl:string = environment.imageUrl;
  ngOnInit(): void {
    if(this.actor.profile_path != null)
    {
      this.profilePictureUrl = this.profilePictureUrl + "w185" + this.actor.profile_path;
    }
    else
    {
      this.profilePictureUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHSXuWiK-ikPb3o_GbRx9HUppDkOLQKR6lw&usqp=CAU";
    }
  }
  ChangeUrl()
  {
    this.route.navigateByUrl(`detail/${this.actor.id}/${this.actor.media_type}`);
  }

}
