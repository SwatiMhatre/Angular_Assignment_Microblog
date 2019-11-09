import { Action } from '@ngrx/store';
import { Activity } from '../model/activity.model';

export const ADD_LIKE = '[LIKE] add'
export const ADD_DISLIKE = '[DISLIKE] add'
export const ADD_COMMENT = '[COMMENT] add'
export const REMOVE_COMMENT = '[COMMENT] remove'
export const LOAD_ACTIVITY = '[ACTIVITY] load';

export const ActivityArray: Array<Activity> = new Array<Activity>();

export class LoadActivity implements Action {
    readonly type = LOAD_ACTIVITY
    constructor(public payload: Activity[]) { 
        payload.forEach((value: Activity, index: number, array: Activity[])=>
        {
            ActivityArray.push(value);
        })
    }
}

export class AddLike implements Action {
    readonly type = ADD_LIKE
    constructor(public payload: Activity) { 
        ActivityArray.push(payload);
    }
}

export class AddDislike implements Action {
    readonly type = ADD_DISLIKE
    constructor(public payload: Activity) {
        ActivityArray.push(payload);
    }
}

export class AddComment implements Action {
    readonly type = ADD_COMMENT
    constructor(public payload: Activity) {
        ActivityArray.push(payload);
    }
}

export class RemoveComment implements Action {
    readonly type = REMOVE_COMMENT
    constructor(public payload: Activity) {
        ActivityArray.push(payload);
    }
}

export type Action = LoadActivity | AddLike | AddDislike | AddComment | RemoveComment;