import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Activity } from '../shared/model/activity.model';
import * as ActivityActions from '../shared/action/blogs.activity.actions';
import * as HomeActions from '../shared/action/home.actions'
import { Blogs } from '../shared/model/blogs.model';
import { ActivityAppState } from '../app.state.activity';
import { Home } from '../shared/model/home.model';
import { ActivityType } from '../shared/model/activity.type';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() title: string;
  @Input() img: string;
  @Input() article: string;
  @Input() articleId: string;
  @Input() likes: number;
  @Input() dislikes: number;

  public commentText: string;
  @Input() comments: Array<string>;
  public viewArticleData = [];

  activity: Activity = {
    id: "",
    blogId: "",
    likes: false,
    dislikes: false,
    comments: "",
    activityType: ActivityType.UNDEFINED
  };
  blogs: Blogs[];
  home: Home;

  constructor(private homeStore: Store<AppState>, private activityStore: Store<ActivityAppState>) {
  }

  ngOnInit() {
  }

  addComment() {
    this.activity.blogId = this.articleId;
    if (this.commentText != "") {
      this.comments.push(this.commentText);
      this.activity.activityType = ActivityType.ADD;
      this.activity.comments = this.commentText;
      this.commentText = ""
      this.activityStore.dispatch(new ActivityActions.AddComment(this.activity));
      this.updateBlogsInStore();
      this.updateHomePageActivityDetails();
    }
  }

  likeOrDislikeActivity(type: string) {
    this.activity.blogId = this.articleId;
    if (type === "like") {
      this.activity.likes = true;
      ++this.likes;
      this.activity.activityType = ActivityType.LIKE;
      this.activityStore.dispatch(new ActivityActions.AddLike(this.activity));

    } else {
      this.activity.dislikes = true;
      ++this.dislikes;
      this.activity.activityType = ActivityType.DISLIKE;
      this.activityStore.dispatch(new ActivityActions.AddDislike(this.activity));
    }

    this.updateBlogsInStore();
    this.updateHomePageActivityDetails();
  }

  deleteComment(index: number) {
    this.activity.blogId = this.articleId;
    this.comments.splice(index, 1);
    this.activity.activityType = ActivityType.REMOVE;
    this.activityStore.dispatch(new ActivityActions.AddComment(this.activity));
    this.updateBlogsInStore();
    this.updateHomePageActivityDetails();
  }
  updateBlogsInStore() {
    this.homeStore.select('blogs').subscribe(data => {
      this.home = data;
      this.blogs = this.home.blogs;
    });
    if (this.blogs) {
      this.blogs.forEach(blog => {
        if (blog.id == this.activity.blogId) {
          blog.likes = this.likes;
          blog.dislikes = this.dislikes;
          blog.comments = this.comments;
        }
      })
    }

    if (this.blogs) {
      this.homeStore.dispatch(new HomeActions.UpdateHome(this.blogs))
    }
  }

  updateHomePageActivityDetails() {
    this.homeStore.select('blogs').subscribe(data => {
      this.home = data;
      if (this.home.blogs) {
        this.home.blogs.forEach(blog => {
          if (blog.id == this.activity.blogId) {
            this.likes = blog.likes;
            this.comments = blog.comments;
            this.dislikes = blog.dislikes;
          }
        })
      }
    });
  }
}