import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  { path: "", pathMatch:"full", redirectTo:"/movies"},

  { 
    path: "movies", 
    component: ListComponent, 
    children:[
        { path: "new", 
          component: AddMovieComponent }
    ]
},
  { path: "movies/:id", component: DetailComponent},
  { path: "movies/:id/review", component: AddReviewComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
