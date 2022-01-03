import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { PageUserComponent } from './page/page-user/page-user.component';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ActorCardComponent } from './components/actor-card/actor-card.component';
import { RandomComponent } from './components/random/random.component';
import { NotfoundComponent } from './modules/notfound/notfound.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PageUserComponent,
    MovieCardComponent,
    ActorCardComponent,
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
