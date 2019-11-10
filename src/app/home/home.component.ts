import { AuthService } from './../auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogs } from '../shared/model/blogs.model';
import { Activity } from '../shared/model/activity.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { BlogsService } from '../shared/service/blogs.service';
import { ActivityService } from '../shared/service/activity.service';
import * as HomeActions from '../shared/action/home.actions';
import * as ActivityActions from '../shared/action/blogs.activity.actions';
import { Home } from '../shared/model/home.model';
import { ActivityAppState } from '../app.state.activity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs: Blogs[];
  home: Home = {
    blogs: this.blogs,
    needsData: true
  };

  blogsObservale: Observable<Blogs[]>;

  constructor(private store: Store<AppState>, 
    private activityStore: Store<ActivityAppState>, 
    private blogsService: BlogsService, 
    private activityService: ActivityService,
    private authService: AuthService) {
  }

  ngOnInit() {
    if (this.getDataFromStore()) {
      this.blogsService.getBlogs().subscribe(data => {
        this.blogs = data;
        console.log(data)
        this.store.dispatch(new HomeActions.LoadHome(this.blogs));
        this.getDataFromStore();
      })

      this.activityService.getActivities().subscribe(data => {
        console.log(data)
        this.activityStore.dispatch(new ActivityActions.LoadActivity(data))
      });

      console.log('%%^&^&^',this.authService.isAuth());
    }
  }

  getDataFromStore(): boolean {
    this.store.select('blogs').subscribe(data => {
      console.log(data)
      this.home = data;
    });
    this.blogs = this.home.blogs;
    return this.home.needsData;
  }
}
