import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Activity } from '../shared/model/activity.model';
import {ActivityService} from '../shared/service/activity.service'

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
    
  }

  getDataFromStore(): void {
    
    
  }

}
