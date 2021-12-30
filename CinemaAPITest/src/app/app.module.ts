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

@NgModule({
  declarations: [
    AppComponent,
    PageUserComponent,
    MovieCardComponent,
    ActorCardComponent,
    NavbarComponent,
    DetailComponent
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
