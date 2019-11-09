import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';
import { Activity } from '../shared/model/activity.model';
import { ActivityAppState } from '../app.state.activity';
import * as ActivityActions from '../shared/action/blogs.activity.actions';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  displayedColumns: string[] = ['blogId', 'likes', 'dislikes', 'comments', 'activityType', 'timeStamp'];
  dataSource : MatTableDataSource<Activity>;

  constructor(private activityStore: Store<ActivityAppState>) {
    this.dataSource = new MatTableDataSource<Activity>();
  }

  ngOnInit() {
    this.getDataFromStore();
  }

  getDataFromStore(): void {
    ActivityActions.ActivityArray.forEach((value: Activity, index: number, array: Activity[])=> {
      this.dataSource.data.push(value);
    });
    /*this.activityStore.select('activity').subscribe(data =>{
      console.log(data)
      this.dataSource = new MatTableDataSource<Activity>(data);
    });*/
  }

}
