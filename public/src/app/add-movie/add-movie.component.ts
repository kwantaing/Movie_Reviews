import { Component, OnInit, Output } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  @Output()Movie_Created = new EventEmitter();
  newMovie_with_Review: any;
  errors: any;
  valid: Boolean;
  ngOnInit() {
    this.newMovie_with_Review = {title: "", name: "", stars: 1, review_content: ""}
    this.valid = false;
  }


  onCreate(newMovie_with_Review){
    let Observable = this._httpService.createMovie_and_Review(newMovie_with_Review);
    Observable.subscribe(data => {
      console.log("data from oncreate:",data)
      if(data["error"]){
        this.errors = data["error"]["errors"];
        console.log(this.errors)
      }else{
        this.Movie_Created.emit("1");
        this._router.navigate(['/'])
      }
    })
  }

}
