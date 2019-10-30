import{Action} from '@ngrx/store';
import{Activity} from '../model/activity.model';
import * as ActivityActions from '../action/Activity.actions'

const initialState : Activity[] = [{
    id : "",
    blogId : "",
    likes : false,
    dislikes : false,
    comments : ""
}];

export function reducer(state:Activity[]= initialState, action:ActivityActions.Action){
    switch (action.type){
        case ActivityActions.LOAD_ACTIVITY:
            return Object.assign([], state, action.payload);
            default :
            state
        
    }
}