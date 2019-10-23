import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogs } from '../shared/model/blogs.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import {BlogsService} from '../shared/service/blogs.service'
import * as HomeActions from '../shared/action/home.actions'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  blogs : Blogs[];
  blogsObservale : Observable<Blogs[]>;
  

  constructor(private store:Store<AppState>, private blogsService : BlogsService) {
  }
  
  ngOnInit() {
    this.blogsService.getBlogs().subscribe(data => {
      this.blogs = data;
      console.log(data)
      this.store.dispatch(new HomeActions.LoadHome(this.blogs));
      this.getDataFromStore();
    })
    
  }

  getDataFromStore(): void {
    this.store.select('blogs').subscribe(data =>{
      console.log(data)
      this.blogs = data;
    });
    
  }
}
