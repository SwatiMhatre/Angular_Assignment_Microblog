import{Action} from '@ngrx/store';
import{Blogs} from '../model/blogs.model';
import{Activity} from '../model/activity.model';
import * as HomeActions from '../action/home.actions'

const initialState : Blogs[] = [{
id : "",
title:"",
article : "",
     imageURL : "",
     likes : 0,
     dislikes : 0,
     comments : []
}];

export function reducer(state:Blogs[]= initialState, action:HomeActions.Action){
    switch (action.type){
        case HomeActions.LOAD_HOME:
            return[...state, action.payload]
        
    }
}