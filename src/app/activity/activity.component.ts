import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Activity } from '../shared/model/activity.model';
import {ActivityService} from '../shared/service/activity.service'
import * as ActivityActions from '../shared/action/activity.actions'

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  
  activities  : Activity[];

  constructor(private store:Store<AppState>, private activityService : ActivityService) {
  }
  
  ngOnInit() {
    this.activityService.getActivities().subscribe(data => {
      this.activities = data;
      console.log(data)
      this.store.dispatch(new ActivityActions.LoadActivity(this.activities));
      this.getDataFromStore();
    })
  }

  getDataFromStore(): void {
    this.store.select('activities').subscribe(data =>{
      console.log(data)
      this.activities = data;
    });
    
  }

}
