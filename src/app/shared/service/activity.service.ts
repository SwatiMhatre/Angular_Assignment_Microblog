import {Injectable, RootRenderer} from '@angular/core'
import { Observable } from 'rxjs'
import { Activity } from '../model/activity.model'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn : 'root'
})
export class ActivityService {

    constructor( private http : HttpClient){}

   getActivities() : Observable<Activity[]>{
       return this.http.get<Activity[]>("../assets/activities.json");
   }
}