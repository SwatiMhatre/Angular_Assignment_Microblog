import {Action} from '@ngrx/store';
import { Blogs } from '../model/blogs.model';
import { Activity } from '../model/activity.model';

export const LOAD_HOME = '[HOME] load';
export const ADD_LIKE = '[LIKE] add'
export const REMOVE_LIKE = '[LIKE] remove'
export const ADD_COMMENT = '[COMMENT] add'

export class LoadHome implements Action{
readonly type = LOAD_HOME

constructor(public payload : Blogs) {}

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

            export type Action = LoadHome | AddLike | RemoveLike | AddComment;