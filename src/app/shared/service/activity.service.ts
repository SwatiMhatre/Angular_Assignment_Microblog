import { Injectable } from '@angular/core';
import {Activity} from '../model/activity.model'
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ActivityService {
  
  constructor( private http : HttpClient){}

  getBlogs() : Observable<Activity[]>{
    return this.http.get<Activity[]>("../assets/activity.json");
}
  
}
