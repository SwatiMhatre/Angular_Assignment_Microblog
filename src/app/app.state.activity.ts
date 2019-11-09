import { Activity } from './shared/model/activity.model';
export interface ActivityAppState {
    readonly activities : Activity[];
}