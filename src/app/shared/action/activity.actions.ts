import {Action} from '@ngrx/store';
import { Blogs } from '../model/blogs.model';
import { Activity } from '../model/activity.model';

export const LOAD_ACTIVITY = '[ACTIVITY] load';
export const ADD_LIKE = '[LIKE] add'
export const REMOVE_LIKE = '[LIKE] remove'
export const ADD_COMMENT = '[COMMENT] add'

export class LoadActivity implements Action{
readonly type = LOAD_ACTIVITY

constructor(public payload : Activity[]) {}

}

export class AddLike implements Action{
    readonly type = ADD_LIKE
    
    constructor(public payload : Activity) {}
    
    }
    export class RemoveLike implements Action{
        readonly type = REMOVE_LIKE
        
        constructor(public payload : Activity) {}
        
        }
        export class AddComment implements Action{
            readonly type = ADD_COMMENT
            
            constructor(public payload : Activity) {}
            
            }

            export type Action = LoadActivity | AddLike | RemoveLike | AddComment;