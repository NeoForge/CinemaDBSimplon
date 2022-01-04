import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomComponent } from './components/random/random.component';
import { AboutComponent } from './modules/about/about.component';
import { DetailComponent } from './page/detail/detail.component';
import { PageUserComponent } from './page/page-user/page-user.component';

const routes: Routes = [
  {path:'search',component:PageUserComponent,pathMatch:'full'},
  {path:'detail/:id/:type',component:DetailComponent,pathMatch:'full'},
  {path: 'random', component: RandomComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: '**', redirectTo: 'search', pathMatch: 'full'},
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
