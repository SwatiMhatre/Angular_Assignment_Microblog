import {Action} from '@ngrx/store';
import { Blogs } from '../model/blogs.model';

export const LOAD_HOME = '[HOME] load';
export const UPDATE_HOME = '[HOME] update';


export class LoadHome implements Action{
readonly type = LOAD_HOME

constructor(public payload : Blogs[]) {}

}

export class UpdateHome implements Action{
    readonly type = UPDATE_HOME
    
    constructor(public payload : Blogs[]) {}
    
    }


            export type Action = LoadHome | UpdateHome;