import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpService } from '../http.service';
import { AddMovieComponent } from '../add-movie/add-movie.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  
})
export class ListComponent implements OnInit {

  constructor(public _httpService: HttpService) { }
  movies: any;
  average: any;
  add: Boolean;
  ngOnInit() {
    this.getMovies();
    this.add = false;
  }

  getMovies(){
    console.log("@Output from addMovie")
    let Observable = this._httpService.getAllMovies();

    Observable.subscribe(data => {
      this.movies = data["movies"]
    })
  }
  getAvg(movie){
    var sum = 0;
    for( let review of movie.reviews){
      sum+= review.stars;
    }
    var avg = sum/movie.reviews.length;
    return avg;
  }
  toAdd(){
    this.add = true;
  }
}
