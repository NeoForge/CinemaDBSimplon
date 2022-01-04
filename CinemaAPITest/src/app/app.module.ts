import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PageUserComponent } from './page/page-user/page-user.component';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ActorCardComponent } from './components/actor-card/actor-card.component';
import { RandomComponent } from './components/random/random.component';
import { NotfoundComponent } from './modules/notfound/notfound.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { DetailComponent } from './page/detail/detail.component';
import { SafePipe } from './tools/safe.pipe';
import { TvshowComponent } from './page/detail/component/tvshow/tvshow.component';
import { PersonComponent } from './page/detail/component/person/person.component';
import { MovieComponent } from './page/detail/component/movie/movie.component';
import { TrailerCardComponent } from './page/detail/component/person/trailer-card/trailer-card.component';
import { ActorCardDetailComponent } from './page/detail/component/other/actor-card-detail/actor-card-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PageUserComponent,
    MovieCardComponent,
    ActorCardComponent,
    DetailComponent,
    SafePipe,
    TvshowComponent,
    PersonComponent,
    MovieComponent,
    TrailerCardComponent,
    ActorCardDetailComponent,
    RandomComponent,
    NotfoundComponent,
    HomeComponent,
    AboutComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
