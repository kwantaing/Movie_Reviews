import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListComponent } from './list/list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddMovieComponent,
    AddReviewComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    OrderModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
