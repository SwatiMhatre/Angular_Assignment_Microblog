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
  blogs: Blogs[];
  home: Home;

  constructor(private homeStore: Store<AppState>, private activityStore: Store<ActivityAppState>) {
  }

  ngOnInit() {
  }

  addComment() {
    let activity: Activity = {
      blogId: this.articleId,
      likes: false,
      dislikes: false,
      comments: this.commentText,
      activityType: ActivityType.ADD,
      timeStamp: this.getTimeStamp()
    };
    this.activityStore.dispatch(new ActivityActions.AddComment(activity));
    this.updateBlogsInStore(this.articleId);
    this.updateHomePageActivityDetails(this.articleId);
    this.comments.push(this.commentText);
    this.commentText = ""
  }

  likeOrDislikeActivity(type: string) {
    let activity: Activity = {
      blogId: this.articleId,
      likes: false,
      dislikes: false,
      comments: this.commentText,
      activityType: ActivityType.ADD,
      timeStamp: this.getTimeStamp()
    };
    if (type === "like") {
      activity.likes = true;
      ++this.likes;
      activity.activityType = ActivityType.LIKE;
      this.activityStore.dispatch(new ActivityActions.AddLike(activity));

    } else {
      activity.dislikes = true;
      ++this.dislikes;
      activity.activityType = ActivityType.DISLIKE;
      this.activityStore.dispatch(new ActivityActions.AddDislike(activity));
    }

    this.updateBlogsInStore(this.articleId);
    this.updateHomePageActivityDetails(this.articleId);
  }

  deleteComment(index: number) {
    let activity: Activity = {
      blogId: this.articleId,
      likes: false,
      dislikes: false,
      comments: this.commentText,
      activityType: ActivityType.REMOVE,
      timeStamp: this.getTimeStamp()
    };
    this.comments.splice(index, 1);
    this.activityStore.dispatch(new ActivityActions.AddComment(activity));
    this.updateBlogsInStore(this.articleId);
    this.updateHomePageActivityDetails(this.articleId);
  }
  updateBlogsInStore(blogId: string) {
    this.homeStore.select('blogs').subscribe(data => {
      this.home = data;
      this.blogs = this.home.blogs;
    });
    if (this.blogs) {
      this.blogs.forEach(blog => {
        if (blog.id == blogId) {
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

  updateHomePageActivityDetails(blogId: string) {
    this.homeStore.select('blogs').subscribe(data => {
      this.home = data;
      if (this.home.blogs) {
        this.home.blogs.forEach(blog => {
          if (blog.id == blogId) {
            this.likes = blog.likes;
            this.comments = blog.comments;
            this.dislikes = blog.dislikes;
          }
        })
      }
    });
  }

  getTimeStamp(): string {
    let now: Date = new Date();
    let date: Array<String> = [this.getDayInString(now.getDay()), String(now.getMonth() + 1), String(now.getFullYear())];
    let time: Array<String> = [String(now.getHours()), String(now.getMinutes()), String(now.getSeconds())];
    return date.join(" ") + "/" + time.join(":");
  }

  getDayInString(dayNumber: number): string {
    switch (dayNumber) {
      case 0:
        return "SUN";
      case 1:
        return "MON";
      case 2:
        return "TUE";
      case 3:
        return "THR";
      case 4:
        return "FRI";
      case 5:
        return "SAT";
    }
  }
}