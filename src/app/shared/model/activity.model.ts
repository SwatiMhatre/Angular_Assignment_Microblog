import { ActivityType } from './activity.type';

export interface Activity {
     blogId : string;
     likes : boolean;
     dislikes : boolean;
     comments : string;
     activityType : ActivityType;
     timeStamp : String;
}