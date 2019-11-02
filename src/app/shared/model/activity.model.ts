import { ActivityType } from './activity.type';

export interface Activity {
     id : string;
     blogId : string;
     likes : boolean;
     dislikes : boolean;
     comments : string;
     activityType : ActivityType;
}