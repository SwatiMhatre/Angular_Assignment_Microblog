import { Action } from '@ngrx/store';
import { Blogs } from '../model/blogs.model';
import { Activity } from '../model/activity.model';

export const ADD_LIKE = '[LIKE] add'
export const ADD_DISLIKE = '[DISLIKE] add'
export const ADD_COMMENT = '[COMMENT] add'
export const REMOVE_COMMENT = '[COMMENT] remove'

export class AddLike implements Action {
    readonly type = ADD_LIKE

    constructor(public payload: Activity) { }

}
export class AddDislike implements Action {
    readonly type = ADD_DISLIKE

    constructor(public payload: Activity) { }

}
export class AddComment implements Action {
    readonly type = ADD_COMMENT

    constructor(public payload: Activity) { }

}
export class RemoveComment implements Action {
    readonly type = REMOVE_COMMENT

    constructor(public payload: Activity) { }

}

export type Action = AddLike | AddDislike | AddComment | RemoveComment;