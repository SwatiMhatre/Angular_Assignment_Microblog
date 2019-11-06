import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { AppState } from '../app.state';
import { Activity } from '../shared/model/activity.model';
import { ActivityService } from '../shared/service/activity.service'

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'blogId', 'likes', 'dislikes', 'comments'];
  dataSource : MatTableDataSource<Activity>;

  constructor(private store: Store<AppState>, private activityService: ActivityService) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getDataFromStore();
  }

  getDataFromStore(): void {
    this.store.select('activity').subscribe(data =>{
      console.log(data)
      this.dataSource = new MatTableDataSource<Activity>(data);
    });
  }

}
