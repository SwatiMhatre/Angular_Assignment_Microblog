import {Injectable, RootRenderer} from '@angular/core'
import { Observable } from 'rxjs'
import { Blogs } from '../model/blogs.model'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn : 'root'
})
export class BlogsService {

    constructor( private http : HttpClient){}

   getBlogs() : Observable<Blogs[]>{
       return this.http.get<Blogs[]>("../assets/blogs.json");
   }
}