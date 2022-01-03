import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { PageUserComponent } from './page/page-user/page-user.component';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ActorCardComponent } from './components/actor-card/actor-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailComponent } from './page/detail/detail.component';
import { SafePipe } from './tools/safe.pipe';
import { TvshowComponent } from './page/detail/component/tvshow/tvshow.component';
import { PersonComponent } from './page/detail/component/person/person.component';
import { MovieComponent } from './page/detail/component/movie/movie.component';
import { TrailerCardComponent } from './page/detail/component/person/trailer-card/trailer-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PageUserComponent,
    MovieCardComponent,
    ActorCardComponent,
    NavbarComponent,
    DetailComponent,
    SafePipe,
    TvshowComponent,
    PersonComponent,
    MovieComponent,
    TrailerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
