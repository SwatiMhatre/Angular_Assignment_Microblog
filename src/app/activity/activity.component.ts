import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';
import { Activity } from '../shared/model/activity.model';
import { ActivityAppState } from '../app.state.activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  displayedColumns: string[] = ['id', 'blogId', 'likes', 'dislikes', 'comments'];
  dataSource : MatTableDataSource<Activity>;

  constructor(private activityStore: Store<ActivityAppState>) {
    this.dataSource = new MatTableDataSource<Activity>();
  }

  ngOnInit() {
    this.getDataFromStore();
  }

  getDataFromStore(): void {
    this.activityStore.select('activity').subscribe(data =>{
      console.log(data)
      this.dataSource = new MatTableDataSource<Activity>(data);
    });
  }

}
