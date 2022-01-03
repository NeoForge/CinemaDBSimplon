import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { NotfoundComponent } from './modules/notfound/notfound.component';
import { RandomComponent } from './components/random/random.component';
import { AboutComponent } from './modules/about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'random', component: RandomComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
