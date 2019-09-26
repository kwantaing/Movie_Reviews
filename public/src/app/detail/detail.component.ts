import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  id: any;
  movie: any;
  ngOnInit() {
    this.getID();
    this.getMovie();
  }

  getID(){
    let Observable = this._route.params;
    Observable.subscribe(data => {
      console.log(data);
      this.id = data["id"];
    })
  }
  
  getMovie(){
    let Observable = this._httpService.getOneMovie(this.id);
    Observable.subscribe(data => {
      console.log(data);
      this.movie = data["movie"][0];
      console.log(this.movie);
    })
  }
  deleteReview(id){
    let Observable = this._httpService.deleteReview(this.id, {review_id:id});
    Observable.subscribe(data => {
      console.log("delete review",data)
      this.getMovie();
    })
  }
  deleteMovie(){
    let Observable = this._httpService.deleteMovie(this.id);
    Observable.subscribe(data => {
      console.log("deleting movie:",data);
      this._router.navigate(['/movies'])
    })
  }

}
