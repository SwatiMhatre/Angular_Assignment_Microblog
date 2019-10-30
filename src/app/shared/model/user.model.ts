import { Activity } from './activity.model';
import { Blogs } from './blogs.model';

export interface User {
     id : string;
     name : string;
     activities: Activity[];
     blogs : Blogs[];
}
