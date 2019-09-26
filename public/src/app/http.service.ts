import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  createMovie_and_Review(newMovie_with_Review){
    return this._http.post('/api/movies/new',newMovie_with_Review)
  }

  createReview(id,newReview){
    return this._http.put(`/api/movies/${id}/review`, newReview)
  }
  getAllMovies(){
    return this._http.get('/api/movies');
  }
  getOneMovie(id){
    return this._http.get(`/api/movies/${id}`)
  }
  deleteReview(id,review_id){
    return this._http.post(`/api/movies/${id}/review`,review_id)
  }
  deleteMovie(id){
    return this._http.delete(`/api/movies/${id}`)
  }
  addReview(id, newReview){
    return this._http.put(`/api/movies/${id}/review`,newReview);
  }
}
