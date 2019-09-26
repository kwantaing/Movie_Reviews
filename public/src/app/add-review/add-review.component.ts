import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  newReview:any;
  movie:any;
  id: any;
  errors: any;
  ngOnInit() {
    this.getID();
    this.getMovie();
    this.newReview = { name: "", stars: 1, review_content: ""}

  }
  getID(){
    let Observable = this._route.params;
    Observable.subscribe(data => {
      console.log("id",data);
      this.id = data["id"];
    })
  }
  
  getMovie(){
    let Observable = this._httpService.getOneMovie(this.id);
    Observable.subscribe(data => {
      console.log(data);
      this.movie = data["movie"][0];
      console.log("Movie:",this.movie);
    })
  }
  addReview(newReview){
    let Observable = this._httpService.addReview(this.id,newReview);
    Observable.subscribe(data => {
      console.log("addReview:",data)
      if(data["error"]){
        this.errors = data["error"]["errors"];
      }else{
        this._router.navigate(['/movies',this.id])
      }
    })
  }
}
